const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const BOARD = 'grass:board';
async function redis(cmds){
  const r = await fetch(URL_ + '/pipeline', {method:'POST', headers:{Authorization:'Bearer '+TOKEN,'Content-Type':'application/json'}, body:JSON.stringify(cmds)});
  if(!r.ok) throw new Error('redis '+r.status);
  return (await r.json()).map(x=>x.result);
}
async function top(){
  const [z] = await redis([['ZREVRANGE', BOARD, '0', '9', 'WITHSCORES']]);
  const out=[]; for(let i=0;i<(z||[]).length;i+=2) out.push({name:z[i], score:+z[i+1]});
  return out;
}
function body(req){ if(req.body && typeof req.body==='object') return req.body; try{return JSON.parse(req.body||'{}')}catch(e){return {}} }
module.exports = async (req,res) => {
  res.setHeader('Cache-Control','no-store');
  if(!URL_||!TOKEN) return res.status(503).json({error:'store not configured'});
  try{
    if(req.method==='GET') return res.status(200).json({top: await top()});
    if(req.method!=='POST') return res.status(405).json({error:'method'});
    const b = body(req);
    const id = String(b.id||''); if(!/^[a-z0-9]{12,40}$/.test(id)) return res.status(400).json({error:'bad id'});
    const name = String(b.name||'').replace(/\s+/g,' ').trim();
    if(name.length<2||name.length>18||!/^[\p{L}\p{N} _.\-]+$/u.test(name)) return res.status(400).json({error:'Name: 2-18 letters, numbers, spaces, _ . -'});
    let n = parseInt(b.n,10); if(!(n>=0)) n=0; n=Math.min(n,25);
    const ip = String(req.headers['x-forwarded-for']||'').split(',')[0].trim()||'x';
    const minute = Math.floor(Date.now()/60000), day = new Date().toISOString().slice(0,10);
    const key = name.toLowerCase();
    const [claimed, owner, prev] = await redis([['HSETNX','grass:names',key,id],['HGET','grass:names',key],['HGET','grass:visitor',id]]);
    if(owner!==id) return res.status(409).json({error:'That name is taken. Pick another.'});
    if(prev && prev!==name){
      const [old] = await redis([['ZSCORE',BOARD,prev]]);
      const cmds=[['ZREM',BOARD,prev],['HSET','grass:visitor',id,name]];
      if(prev.toLowerCase()!==key) cmds.push(['HDEL','grass:names',prev.toLowerCase()]);
      if(old) cmds.push(['ZINCRBY',BOARD,String(old),name]);
      await redis(cmds);
    } else if(!prev){ await redis([['HSET','grass:visitor',id,name]]); }
    let limited=false;
    if(n>0){
      const [rl,,cap] = await redis([['INCRBY','grass:rl:'+ip+':'+minute,String(n)],['EXPIRE','grass:rl:'+ip+':'+minute,'70'],['INCRBY','grass:cap:'+id+':'+day,String(n)],['EXPIRE','grass:cap:'+id+':'+day,'90000']]);
      if(rl>150||cap>1500) limited=true; else await redis([['ZINCRBY',BOARD,String(n),name]]);
    }
    const [me] = await redis([['ZSCORE',BOARD,name]]);
    return res.status(limited?429:200).json({ok:!limited, limited, me:+(me||0), name, top: await top()});
  }catch(e){ return res.status(500).json({error:'server'}); }
};
