/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'finbros.s3.ap-south-1.amazonaws.com',
      },
       {
        protocol: "https",
        hostname: "media.banksathi.com",
      },
    ],
  },
};

export default nextConfig;
