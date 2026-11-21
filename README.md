# Repro: web components docgen payload missing declaring module path

Storybook 11.0.0-beta.3 with `@storybook/web-components-vite`.

## Problem

The docgen payload of `my-element` has no path of its module, `src/my-element.ts`:

- `src/my-element.ts`
  - declared in `custom-elements.json` set in `framework.options.customElementsManifest`
  - docgen payload contains `manifestPath: "custom-elements.json"` and no module path
- `src/repro-element.ts`
  - not declared in CEM, so docgen falls back to reading the source
  - docgen payload has its module in `manifestPath: "src/repro-element.ts"`

See `.storybook/log-docgen.js` for docgen provider middleware.

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
