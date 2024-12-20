/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    //assetPrefix: 'https://fractl.zavamed.com/campaign-zavacalculator/assets/js/', // Set the base path for your JavaScript files
    distDir: 'out', // Optional: Specify the output directory
};

export default nextConfig;
