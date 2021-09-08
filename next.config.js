/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  target: "serverless",
  distDir: "out",
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
