/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'PVTex',
    description: 'PVTex KASM Repo.',
    icon: 'https://pvtex.github.io/kasm-registry/1.0/logo.png',
    listUrl: 'https://pvtex.github.io/kasm-registry/',
    contactUrl: 'https://github.com/pvtex/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
