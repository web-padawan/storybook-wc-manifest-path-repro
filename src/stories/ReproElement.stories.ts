import preview from '../../.storybook/preview';
import { html } from 'lit';
import '../repro-element';

// Declared in no manifest, so docgen reads the sources
const meta = preview.meta({
  title: 'Repro/ReproElement',
  component: 'repro-element',
  tags: ['autodocs'],
  render: () => html`<repro-element></repro-element>`,
});

export const Default = meta.story();
