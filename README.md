# Repro: web components docgen payload missing declaring module path

Storybook 11.0.0-beta.3 with `@storybook/web-components-vite`.

- `src/my-element.ts` - declared in `custom-elements.json` set in `framework.options.customElementsManifest`.
- `src/repro-element.ts` - not declared in CEM, so docgen reads the sources.
- `.storybook/log-docgen.js` - docgen provider middleware that logs the payload.

## Setup

Install dependencies:

```sh
npm install
```

Build Storybook:

```sh
npm run build-storybook
```

## Result

```
[repro] <my-element> customElementsManifest: { manifestPath: "custom-elements.json", declaration: {…} }
[repro] <repro-element> customElementsManifest: { manifestPath: "src/repro-element.ts", declaration: {…} }
```

The payload of `my-element` has no path of its module, `src/my-element.ts`.
The payload of `repro-element` has its module, in the same `manifestPath` field.
