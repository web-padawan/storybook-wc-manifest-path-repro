import { defineMain } from '@storybook/web-components-vite/node';

export default defineMain({
  framework: {
    name: '@storybook/web-components-vite',
    options: { customElementsManifest: '../custom-elements.json' },
  },
  stories: ['../src/*.stories.ts'],
  addons: ['./log-docgen.js'],
});
