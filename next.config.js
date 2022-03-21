/** @type {import('next').NextConfig} */
const nextConfig = {
  profiling: true,
  experimental: {
    serverComponents: true,
    concurrentFeatures: true,
    reactMode: 'concurrent',
    runtime: 'nodejs'
  }
}

module.exports = nextConfig

