import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
// const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
  //   config.plugins.push(
  //     new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       "window.jQuery": "jquery",
  //     })
  //   )
  //   return config;
  // },
  images: {
    domains: ['pics.uncubus.tech']
  },
};

export default withNextIntl(nextConfig);