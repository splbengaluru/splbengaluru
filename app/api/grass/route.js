// Touch Grass leaderboard API. GET = top 10, POST = add touches for a visitor.
// Same contract and rate limits as the original api/grass.js serverless function.
import { redis, redisConfigured } from "@/lib/upstash";

export const dynamic = "force-dynamic";

const BOARD = "grass:board";
const NO_STORE = { "Cache-Control": "no-store" };
const json = (data, status = 200) => Response.json(data, { status, headers: NO_STORE });

async function top() {
  const [z] = await redis([["ZREVRANGE", BOARD, "0", "9", "WITHSCORES"]]);
  const out = [];
  for (let i = 0; i < (z || []).length; i += 2) out.push({ name: z[i], score: +z[i + 1] });
  return out;
}

export async function GET() {
  if (!redisConfigured()) return json({ error: "store not configured" }, 503);
  try {
    return json({ top: await top() });
  } catch {
    return json({ error: "server" }, 500);
  }
}

export async function POST(req) {
  if (!redisConfigured()) return json({ error: "store not configured" }, 503);
  try {
    let b = {};
    try { b = await req.json(); } catch { b = {}; }
    if (!b || typeof b !== "object") b = {};
    const id = String(b.id || "");
    if (!/^[a-z0-9]{12,40}$/.test(id)) return json({ error: "bad id" }, 400);
    const name = String(b.name || "").replace(/\s+/g, " ").trim();
    if (name.length < 2 || name.length > 18 || !/^[\p{L}\p{N} _.\-]+$/u.test(name))
      return json({ error: "Name: 2-18 letters, numbers, spaces, _ . -" }, 400);
    let n = parseInt(b.n, 10);
    if (!(n >= 0)) n = 0;
    n = Math.min(n, 500); // batch size per request, not a score limit
    const ip = String(req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "x";
    const minute = Math.floor(Date.now() / 60000);
    const day = new Date().toISOString().slice(0, 10);
    const key = name.toLowerCase();
    const [, owner, prev] = await redis([
      ["HSETNX", "grass:names", key, id],
      ["HGET", "grass:names", key],
      ["HGET", "grass:visitor", id],
    ]);
    if (owner !== id) return json({ error: "That name is taken. Pick another." }, 409);
    if (prev && prev !== name) {
      const [old] = await redis([["ZSCORE", BOARD, prev]]);
      const cmds = [["ZREM", BOARD, prev], ["HSET", "grass:visitor", id, name]];
      if (prev.toLowerCase() !== key) cmds.push(["HDEL", "grass:names", prev.toLowerCase()]);
      if (old) cmds.push(["ZINCRBY", BOARD, String(old), name]);
      await redis(cmds);
    } else if (!prev) {
      await redis([["HSET", "grass:visitor", id, name]]);
    }
    // No score cap. Only a bot guard: more than 3000 touches a minute from one IP
    // (50 a second) is not a human. Limited touches are not lost - the client retries.
    let limited = false;
    if (n > 0) {
      const rlKey = "grass:rl:" + ip + ":" + minute;
      const [rl] = await redis([["INCRBY", rlKey, String(n)], ["EXPIRE", rlKey, "70"]]);
      if (rl > 3000) limited = true;
      else await redis([["ZINCRBY", BOARD, String(n), name]]);
    }
    const [me] = await redis([["ZSCORE", BOARD, name]]);
    return json({ ok: !limited, limited, me: +(me || 0), name, top: await top() }, limited ? 429 : 200);
  } catch {
    return json({ error: "server" }, 500);
  }
}
