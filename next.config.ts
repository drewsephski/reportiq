/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["images.unsplash.com"],
    },
    // No redirects needed as we want to show the homepage
  };
  
  module.exports = nextConfig; 