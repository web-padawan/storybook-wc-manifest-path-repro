import { defineMain } from '@storybook/web-components-vite/node';

export default defineMain({
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "./log-manifest-path-preset.js"
  ],
  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {
      "customElementsManifest": "../custom-elements.json"
    }
  }
});