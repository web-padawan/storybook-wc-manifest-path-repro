// Docgen provider middleware that logs the path the web components framework passes on
export function createDocgenProvider() {
  return (next) => async (input) => {
    const payload = await next(input);
    const entry = payload?.customElementsManifest;
    if (entry) {
      console.log(`[repro] <${entry.declaration.tagName}> customElementsManifest.manifestPath = ${entry.manifestPath}`);
    }
    return payload;
  };
}
