import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Old static URLs keep working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/season-1.html", destination: "/season-1", permanent: true },
      { source: "/terms", destination: "/tnc", permanent: true },
      { source: "/terms-and-conditions", destination: "/tnc", permanent: true },
    ];
  },
};
export default nextConfig;
