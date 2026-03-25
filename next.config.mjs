/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true, // Added because live preview in `next dev` mode is ignoring errors, while `next build` fails, which is confusing to users
    },
};

export default nextConfig;
  