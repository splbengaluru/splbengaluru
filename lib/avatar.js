export const AVATAR_OPTIONS = {
  gender: ["neutral", "masculine", "feminine"],
  hairstyle: ["crop", "swept", "curly", "bob", "long", "buzz"],
  hairColor: ["black", "brown", "auburn", "blonde", "pink"],
  skin: ["sand", "warm", "brown", "deep", "rose"],
  outfit: ["league-blue", "volt", "pink", "ink", "cream"],
  facialHair: ["none", "stubble", "mustache", "beard"],
};
export const DEFAULT_AVATAR = { gender: "neutral", hairstyle: "crop", hairColor: "black", skin: "warm", outfit: "league-blue", facialHair: "none" };
export const AVATAR_COLORS = {
  black: "#171b28", brown: "#503626", auburn: "#9c472e", blonde: "#d8a948", pink: "#f36ba9",
  sand: "#efc8a6", warm: "#c88a59", deep: "#633e32", rose: "#e0a58d", ink: "#171b28",
  "league-blue": "#333ab4", volt: "#d8f640", cream: "#f5eee0",
};
AVATAR_COLORS.brownSkin = "#946247";
export function normalizeAvatar(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const normalized = {};
  for (const [key, options] of Object.entries(AVATAR_OPTIONS)) {
    if (!options.includes(value[key])) return null;
    normalized[key] = value[key];
  }
  return normalized;
}
