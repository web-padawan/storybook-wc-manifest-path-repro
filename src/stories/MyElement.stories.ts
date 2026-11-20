import preview from '../../.storybook/preview';
import { html } from 'lit';
import '../my-element';

// Declared in custom-elements.json
const meta = preview.meta({
  title: 'Repro/MyElement',
  component: 'my-element',
  tags: ['autodocs'],
  render: () => html`<my-element></my-element>`,
});

export const Default = meta.story();
