"use client";
import { useState, useEffect, useRef } from "react";

const badges = [
  {
    rotation: "-3deg",
    image: "/assets/badge-founder-feed.jpg",
    alt: "I'm pitching",
    tag: "Track 01",
    title: "For Founders",
    description: "Pitch live to active VCs, defend your unit economics on stage, and compete for the $1,000,000 prize.",
    href: "/apply",
    cta: "Apply Now →",
  },
  {
    rotation: "2deg",
    image: "/assets/badge-attendee-feed.jpg",
    alt: "I'm in the room",
    tag: "Track 02",
    title: "For Attendees",
    description: "Watch 15 high-stakes pitches, deconstruct live institutional diligence, and connect with top founders.",
    href: "/register",
    cta: "Claim Pass (₹999) →",
  },
  {
    rotation: "-1deg",
    image: "/assets/badge-investor-feed.jpg",
    alt: "I brought a cheque",
    tag: "Track 03",
    title: "For Investors & Angels",
    description: "Scout pre-vetted deal flow, review stage diligence memos, and syndicate backing for top Indian ventures.",
    href: "/interest/vc",
    cta: "VC Registration →",
  },
  {
    rotation: "3deg",
    image: "/assets/badge-builder-feed.jpg",
    alt: "I'm building",
    tag: "Track 04",
    title: "For Partners & Sponsors",
    description: "Showcase developer infrastructure, secure high-impact brand visibility, and back the Silicon Valley pathway.",
    href: "/interest/sponsor",
    cta: "Partner Track →",
  },
  {
    rotation: "-2deg",
    image: "/assets/badge-judge-feed.jpg",
    alt: "I'm judging",
    tag: "Track 05",
    title: "For Jury & Evaluation",
    description: "Score the 15 finalists using the standardized 100-point venture rubric under strict conflict disclosures.",
    href: "/interest/judge",
    cta: "Judging Rubric →",
  },
];

export default function BadgeDeck() {
  const [activeFlipped, setActiveFlipped] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (hasInteracted) return;

    timerRef.current = setInterval(() => {
      setActiveFlipped((prev) => (prev + 1) % badges.length);
    }, 2400);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasInteracted]);

  const handleManualInteraction = (index) => {
    setHasInteracted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveFlipped(index);
  };

  return (
    <div
      className="badge-row"
      onMouseEnter={() => {
        setHasInteracted(true);
        if (timerRef.current) clearInterval(timerRef.current);
      }}
    >
      {badges.map((b, i) => {
        const isOpen = activeFlipped === i;
        return (
          <div
            key={b.title}
            className="role-badge"
            style={{ "--r": b.rotation }}
            data-open={isOpen}
            onMouseEnter={() => handleManualInteraction(i)}
            onClick={() => handleManualInteraction(isOpen ? -1 : i)}
          >
            <button
              className="badge-front"
              type="button"
              aria-expanded={isOpen}
              aria-label={`${b.alt}. Tap to flip details`}
              onClick={(e) => {
                e.stopPropagation();
                handleManualInteraction(isOpen ? -1 : i);
              }}
            >
              <img src={b.image} alt={b.alt} loading="lazy" />
              <span>{isOpen ? "Flipped ⟲" : "Flip / tap for details"}</span>
            </button>
            <div className="badge-back">
              <span className="badge-tag">{b.tag}</span>
              <b>{b.title}</b>
              <p>{b.description}</p>
              <a className="btn btn-accent btn-sm" href={b.href}>
                {b.cta}
              </a>
              <button
                type="button"
                className="badge-reset"
                onClick={(e) => {
                  e.stopPropagation();
                  handleManualInteraction(-1);
                }}
              >
                Show badge ↩
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
