/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/TitusQuayson',
  assetPrefix: '/TitusQuayson',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig