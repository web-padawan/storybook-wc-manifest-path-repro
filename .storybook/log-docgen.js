import { fileURLToPath } from 'node:url';

// Add docgen provider after the one of the web components framework
export const experimental_docgenProvider = (existing = []) => [
  ...existing,
  { moduleSpecifier: fileURLToPath(import.meta.url), options: {} },
];

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
