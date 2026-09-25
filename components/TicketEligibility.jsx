"use client";
import { useEffect, useState } from "react";
export default function TicketEligibility() {
  const [eligibility, setEligibility] = useState(null);
  useEffect(() => { fetch("/api/tickets/eligibility", { cache:"no-store" }).then(r => r.json()).then(setEligibility).catch(() => {}); }, []);
  return <div className="ticket-unlock" role="status">
    <div className="unlock-row"><strong>₹799 applicant ticket</strong>{eligibility?.applied ? <span>Unlocked</span> : <span>Locked</span>}</div>
    {eligibility?.applied ? <p>Your Google account matches a pitch application. Choose the ₹799 ticket in the form below.</p> : <p>Apply to pitch free with this Google account to unlock ₹799.</p>}
    <a href="/apply">Apply to pitch →</a>
    <div className="unlock-row"><strong>₹4,999 showcase pass</strong>{eligibility?.selected ? <span>Selected</span> : <span>Locked</span>}</div>
    <p>Only selected founders can unlock the showcase pass. Purchase details <span className="tba">TBA</span>.</p>
  </div>;
}
