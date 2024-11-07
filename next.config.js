// next.config.ts
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, options) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new NextFederationPlugin({
        name: "microFrontend",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./MfeComponent": "./src/components/MfeComponent.tsx",
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
