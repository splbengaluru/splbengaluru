import { config } from "@/lib/supabase";
export const dynamic = "force-dynamic";
export async function GET() {
  const cfg = config();
  if (!cfg) return Response.json({ configured:false }, { status:503 });
  const headers={apikey:cfg.service,...(cfg.service.startsWith("sb_secret_")?{}:{Authorization:`Bearer ${cfg.service}`}),"Content-Type":"application/json"};
  async function status(path,options={}) { try { const r=await fetch(cfg.url+"/rest/v1/"+path,{headers,...options,cache:"no-store"}); const d=r.ok?null:await r.json(); return {status:r.status,code:d?.code||null}; } catch {return {status:0,code:null};} }
  const [orders,paid,test,rpc]=await Promise.all([
    status("payment_orders?select=id&limit=0"),
    status("audience_registrations?select=paid_ticket_number&limit=0"),
    status("audience_registrations?select=test_ticket_number&limit=0"),
    status("rpc/confirm_captured_payment",{method:"POST",body:JSON.stringify({p_order:"invalid_order",p_payment:"invalid_payment",p_amount:1,p_mode:"test"})}),
  ]);
  return Response.json({orders,paid,test,rpc},{headers:{"Cache-Control":"no-store"}});
}
