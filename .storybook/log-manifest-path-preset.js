import { fileURLToPath } from 'node:url';

export const experimental_docgenProvider = (existing = []) => [
  ...existing,
  { moduleSpecifier: fileURLToPath(new URL('./log-manifest-path.js', import.meta.url)), options: {} },
];
