/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SANITY_PROJECT_URL: process.env.SANITY_PROJECT_URL,
        SANITY_ALL_PROJECTS_URL: process.env.SANITY_ALL_PROJECTS_URL,
        SANITY_PROJECT_BY_CATEGORY: process.env.SANITY_PROJECT_BY_CATEGORY,
        URL: process.env.URL,
        EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
        EMAIL_PUBLIC_ID: process.env.EMAIL_PUBLIC_ID,
        EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    }
}

module.exports = nextConfig
