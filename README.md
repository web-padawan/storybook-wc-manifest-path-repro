# Repro: no declaring module in the web components docgen payload

Storybook 11.0.0-beta.3 with `@storybook/web-components-vite`.

- `src/my-element.ts` is declared in `custom-elements.json`, set in `framework.options.customElementsManifest`.
- `src/repro-element.ts` is declared in no manifest, so docgen reads the sources.
- `.storybook/log-docgen.js` is a docgen provider middleware that logs the `customElementsManifest` entry of each payload.
- `typescript` is `~6.0.3`, as Storybook cannot generate declarations from sources with TypeScript 7.

## Steps

```sh
npm install
npm run build-storybook
```

## Result

```
[repro] <my-element> customElementsManifest: { manifestPath: "custom-elements.json", declaration: {…} }
[repro] <repro-element> customElementsManifest: { manifestPath: "src/repro-element.ts", declaration: {…} }
```

The payload of `my-element` has no path of its module, `src/my-element.ts`.
The payload of `repro-element` has its module, in the same `manifestPath` field.
