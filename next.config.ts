import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["project-management.fra1.digitaloceanspaces.com"],
    },
};

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");
export default withNextIntl(nextConfig);
