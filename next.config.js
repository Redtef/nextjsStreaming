/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org", "api.lorem.space"],
  },
};

module.exports = nextConfig;
