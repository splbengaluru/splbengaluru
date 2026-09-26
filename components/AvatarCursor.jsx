"use client";
import { useEffect } from "react";
import { AVATAR_COLORS as c, DEFAULT_AVATAR } from "@/lib/avatar";
import { CURSOR_HAND } from "@/lib/cursor-hand";
import { CURSOR_HAND_MID } from "@/lib/cursor-mid";
import { CURSOR_HAND_BENT } from "@/lib/cursor-bent";

const svgUrl = (avatar, frame = 0) => {
  const a = { ...DEFAULT_AVATAR, ...avatar };
  const hair = c[a.hairColor] || c.black;
  const skin = a.skin === "brown" ? c.brownSkin : c[a.skin] || c.warm;
  const shirt = c[a.outfit] || c["league-blue"];
  const rect = (x, y, w, h, color) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}"/>`;
  const hairstyle = {
    buzz: rect(25, 8, 13, 2, hair),
    crop: rect(22, 7, 19, 5, hair) + rect(22, 10, 3, 6, hair),
    swept: rect(22, 7, 19, 3, hair) + rect(21, 9, 16, 4, hair),
    curly: [22, 28, 34, 39].map(x => rect(x, 7, 4, 5, hair)).join(""),
    bob: rect(22, 7, 19, 5, hair) + rect(21, 10, 4, 18, hair) + rect(39, 10, 4, 18, hair),
    long: rect(22, 7, 19, 5, hair) + rect(21, 10, 4, 25, hair) + rect(39, 10, 4, 25, hair)
  }[a.hairstyle] || "";
  const beard = a.facialHair === "none" ? "" : a.facialHair === "mustache" ? rect(29, 25, 7, 2, hair) : a.facialHair === "stubble" ? rect(25, 28, 2, 2, hair) + rect(37, 28, 2, 2, hair) : rect(25, 27, 14, 4, hair) + rect(27, 23, 3, 1, hair) + rect(36, 23, 3, 1, hair);
  const longHair = ["bob", "long"].includes(a.hairstyle);
  const hand = frame === 2 ? CURSOR_HAND_BENT : frame === 1 ? CURSOR_HAND_MID : CURSOR_HAND;
  // Hand and head sit side-by-side at the same height, matching the latest owner mock.
  const avatarParts = `<g transform="translate(-4 -4)">${rect(21, 10, 22, 29, c.ink)}${rect(23, 10, 17, 21, skin)}${longHair ? rect(21, 9, 22, 25, hair) + rect(23, 10, 17, 21, skin) : ""}${hairstyle}${rect(26, 17, 3, 3, c.ink)}${rect(36, 17, 3, 3, c.ink)}${rect(31, 24, 5, 3, "#923f3d")}${beard}${rect(24, 32, 16, 6, shirt)}${rect(23, 30, 3, 2, "#333ab4")}${rect(40, 30, 3, 2, "#333ab4")}</g>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 39 39" shape-rendering="crispEdges"><image href="data:image/png;base64,${hand}" x="1" y="1" width="21" height="20"/>${avatarParts}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 1 1, auto`;
};
export default function AvatarCursor({ avatar }) {
  useEffect(() => {
    if (!avatar || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const root = document.documentElement;
    root.style.setProperty("--spl-cursor", svgUrl(avatar, false));
    root.style.setProperty("--spl-cursor-mid", svgUrl(avatar, 1));
    root.style.setProperty("--spl-cursor-click", svgUrl(avatar, 2));
    root.classList.add("spl-custom-cursor");
    let timer;
    let pressed = false;
    const reset = () => { clearTimeout(timer); root.classList.remove("spl-cursor-mid", "spl-cursor-click"); };
    const down = () => {
      reset();
      pressed = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { root.classList.add("spl-cursor-click"); return; }
      root.classList.add("spl-cursor-mid");
      timer = setTimeout(() => { root.classList.remove("spl-cursor-mid"); root.classList.add("spl-cursor-click"); }, 65);
    };
    const up = () => {
      if (!pressed) return;
      pressed = false;
      clearTimeout(timer);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { reset(); return; }
      root.classList.remove("spl-cursor-mid");
      root.classList.add("spl-cursor-click");
      timer = setTimeout(() => { root.classList.remove("spl-cursor-click"); root.classList.add("spl-cursor-mid");
        timer = setTimeout(reset, 65); }, 65);
    };
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    return () => { reset(); root.classList.remove("spl-custom-cursor"); root.style.removeProperty("--spl-cursor"); root.style.removeProperty("--spl-cursor-mid"); root.style.removeProperty("--spl-cursor-click"); window.removeEventListener("pointerdown", down); window.removeEventListener("pointerup", up); window.removeEventListener("pointercancel", reset); window.removeEventListener("blur", reset); };
  }, [avatar]);
  return null;
}
