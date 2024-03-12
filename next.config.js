/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SANITY_PROJECT_URL: process.env.SANITY_PROJECT_URL,
        SANITY_ALL_PROJECTS_URL: process.env.SANITY_ALL_PROJECTS_URL,
    }
}

module.exports = nextConfig
