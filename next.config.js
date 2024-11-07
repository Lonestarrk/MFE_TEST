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
        // shared: {
        //   react: { singleton: false, requiredVersion: false },
        //   "react-dom": { singleton: false, requiredVersion: false },
        //   "@emotion/react": {
        //     singleton: false,
        //     eager: false,
        //     requiredVersion: "11.13.3",
        //   },
        //   "@emotion/styled": {
        //     singleton: false,
        //     eager: false,
        //     requiredVersion: "11.13.3",
        //   },
        //   "@mui/material": {
        //     singleton: false,
        //     eager: false,
        //     requiredVersion: "6.1.6",
        //   },
        // },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
