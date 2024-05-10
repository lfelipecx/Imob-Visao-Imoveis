/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ 
            hostname: "i.im.ge"
        }]
    }
};

export default nextConfig;
