// Docgen provider middleware that logs the `customElementsManifest` entry of the web components framework
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
