/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old static URLs keep working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/season-1.html", destination: "/season-1", permanent: true },
    ];
  },
};
export default nextConfig;
