"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function VisitTracker() {
  const path = usePathname();
  useEffect(() => {
    if (!path || path.startsWith("/admin")) return;
    let visitor, session;
    try {
      visitor = localStorage.getItem("spl_visitor") || crypto.randomUUID();
      localStorage.setItem("spl_visitor", visitor);
      session = sessionStorage.getItem("spl_session") || crypto.randomUUID();
      sessionStorage.setItem("spl_session", session);
    } catch { return; }
    const send = (kind) => {
      if (document.visibilityState !== "visible") return;
      fetch("/api/analytics/visit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ visitor, session, path, kind }), keepalive: true }).catch(() => {});
    };
    send("view");
    const timer = setInterval(() => send("pulse"), 60000);
    const visible = () => { if (document.visibilityState === "visible") send("pulse"); };
    document.addEventListener("visibilitychange", visible);
    return () => { clearInterval(timer); document.removeEventListener("visibilitychange", visible); };
  }, [path]);
  return null;
}
