/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'edge',
    reactRoot: 'concurrent',
    serverComponents: true
  }
}

module.exports = nextConfig
