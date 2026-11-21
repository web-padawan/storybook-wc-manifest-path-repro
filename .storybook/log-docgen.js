import { fileURLToPath } from 'node:url';

// Adds this file as a docgen provider, after the one of the web components framework
export const experimental_docgenProvider = (existing = []) => [
  ...existing,
  { moduleSpecifier: fileURLToPath(import.meta.url), options: {} },
];

// Logs the `customElementsManifest` entry of each payload
export function createDocgenProvider() {
  return (next) => async (input) => {
    const payload = await next(input);
    const entry = payload?.customElementsManifest;
    if (entry) {
      const fields = Object.entries(entry).map(([key, value]) => `${key}: ${key === 'declaration' ? '{…}' : JSON.stringify(value)}`);
      console.log(`[repro] <${entry.declaration.tagName}> customElementsManifest: { ${fields.join(', ')} }`);
    }
    return payload;
  };
}
