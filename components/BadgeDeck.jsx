"use client";
import { useState, useEffect, useRef } from "react";

const badges = [
  {
    rotation: "-3deg",
    image: "/assets/badge-founder-feed.jpg",
    alt: "I'm pitching",
    title: "For Founders",
    description: "Pitch live on stage to active VCs and compete for the $1,000,000 prize.",
    href: "/apply",
    cta: "Apply Now →",
  },
  {
    rotation: "2deg",
    image: "/assets/badge-attendee-feed.jpg",
    alt: "I'm in the room",
    title: "For Attendees",
    description: "Watch 15 real pitches, deconstruct live diligence and connect with builders.",
    href: "/register",
    cta: "Claim Pass (₹999) →",
  },
  {
    rotation: "-1deg",
    image: "/assets/badge-investor-feed.jpg",
    alt: "I brought a cheque",
    title: "For Investors",
    description: "Scout pre-vetted deal flow and evaluate India's top 15 teams.",
    href: "/interest/vc",
    cta: "VC Registration →",
  },
  {
    rotation: "3deg",
    image: "/assets/badge-builder-feed.jpg",
    alt: "I'm building",
    title: "For Partners",
    description: "Demo tools, showcase infrastructure and back the Silicon Valley pathway.",
    href: "/interest/sponsor",
    cta: "Partner Track →",
  },
  {
    rotation: "-2deg",
    image: "/assets/badge-judge-feed.jpg",
    alt: "I'm judging",
    title: "For Jury",
    description: "Review the standardized 100-point rubric and evaluation flow.",
    href: "/interest/judge",
    cta: "Judging Rubric →",
  },
];

export default function BadgeDeck() {
  const [activeFlipped, setActiveFlipped] = useState(0);
  const [userHasFlipped, setUserHasFlipped] = useState(false);
  const timerRef = useRef(null);

  // Auto-flip one by one sequentially until the user flips it themselves
  useEffect(() => {
    if (userHasFlipped) return;

    timerRef.current = setInterval(() => {
      setActiveFlipped((prev) => (prev + 1) % badges.length);
    }, 2800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [userHasFlipped]);

  const stopAutoCycleAndSet = (index) => {
    setUserHasFlipped(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setActiveFlipped(index);
  };

  return (
    <div className="badges interactive-badges">
      {badges.map((b, i) => {
        const isOpen = activeFlipped === i;
        return (
          <div
            key={b.title}
            className="role-badge"
            style={{ "--r": b.rotation }}
            data-open={isOpen}
            onMouseEnter={() => {
              if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                stopAutoCycleAndSet(i);
              }
            }}
            onMouseLeave={(e) => {
              if (userHasFlipped && !e.currentTarget.contains(document.activeElement)) {
                setActiveFlipped(-1);
              }
            }}
          >
            <button
              className="badge-front"
              type="button"
              aria-expanded={isOpen}
              aria-label={`${b.alt}. Flip for details`}
              onClick={(e) => {
                e.stopPropagation();
                stopAutoCycleAndSet(isOpen ? -1 : i);
              }}
            >
              <img src={b.image} alt={b.alt} loading="lazy" />
              <span>{isOpen ? "Flipped ⟲" : "Flip / tap for details"}</span>
            </button>
            <div className="badge-back" onClick={(e) => e.stopPropagation()}>
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
                  stopAutoCycleAndSet(-1);
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
