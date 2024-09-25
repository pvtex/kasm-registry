/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'PVTex',
    description: 'PVTex KASMweb Repo.',
    icon: '/img/logo.png',
    listUrl: 'https://pvtex.github.io/',
    contactUrl: 'https://www.pvtex.de',
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
