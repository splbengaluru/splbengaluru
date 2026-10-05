"use client";
import { useEffect } from "react";

export default function HomeAnchors() {
  useEffect(() => {
    let cancelled = false;

    // 1. Initial jump alignment on page load / hash change
    const align = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const el = id && document.getElementById(id);
      if (el) el.scrollIntoView({ block: "start", behavior: "instant" });
    };

    const ready = async () => {
      await document.fonts.ready;
      if (!cancelled) requestAnimationFrame(() => requestAnimationFrame(align));
    };

    ready();
    window.addEventListener("hashchange", align);

    // 2. Active Anchor Scroll Spy
    const sectionIds = [
      "home",
      "what",
      "format",
      "event",
      "travel",
      "world-cup",
      "tickets",
      "investors",
      "badges",
      "rubric",
      "jury",
      "partner-preview",
      "mentors",
      "logistics",
      "schedule",
      "sponsors",
      "faq",
      "hosts",
    ];

    let currentActive = "";
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const scrollPosition = window.scrollY + 160;

        let activeId = "";
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              activeId = id;
              break;
            }
          }
        }

        if (activeId && activeId !== currentActive) {
          currentActive = activeId;

          // Update page-index links
          document.querySelectorAll(".page-index a").forEach((a) => {
            const href = a.getAttribute("href") || "";
            const isMatch = href === `#${activeId}`;
            if (isMatch) {
              a.classList.add("is-active");
            } else {
              a.classList.remove("is-active");
            }
          });

          // Update indicator in page-index if present
          const indicator = document.querySelector(".page-index .active-anchor-tag");
          if (indicator) {
            indicator.textContent = `#${activeId}`;
          }

          // Update top header nav links
          document.querySelectorAll(".nav ul a").forEach((a) => {
            const href = a.getAttribute("href") || "";
            if (href.includes(`#${activeId}`)) {
              a.classList.add("is-active");
            } else {
              a.classList.remove("is-active");
            }
          });

          // Sync URL hash seamlessly without jump
          if (window.history && window.history.replaceState) {
            window.history.replaceState(null, "", `#${activeId}`);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelled = true;
      window.removeEventListener("hashchange", align);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
