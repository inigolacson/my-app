/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
  sassOptions: {
    additionalData: '$var: red;',
    implementation: 'sass-embedded',
  }
};

export default nextConfig;
