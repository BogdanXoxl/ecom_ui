import type { StorybookConfig } from "@storybook/react-webpack5";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), "./src"];
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.svg$/i,
        type: "javascript/auto",
        use: [
          { loader: "@svgr/webpack", options: { icon: true } },
          "url-loader",
        ],
      },
    ];
    return config;
  },
};

export default config;
