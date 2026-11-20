# Repro: no declaring module in the web components docgen payload

Storybook 11.0.0-beta.3, `lit-vite/default-ts` sandbox.

- `my-element`: declared in `custom-elements.json`, set in `framework.options.customElementsManifest`. Its module is `src/my-element.ts`.
- `repro-element`: declared in no manifest, so web components docgen reads the sources.
- `.storybook/log-manifest-path.js`: a docgen provider middleware that logs the `customElementsManifest` entry of the payload.
- `typescript` is `~6.0.3`, as Storybook cannot generate declarations from sources with TypeScript 7.

## Steps

1. Run `yarn build-storybook`.
2. See the `[repro]` lines in the output.

## Result

```
[repro] <my-element> customElementsManifest: { manifestPath: "custom-elements.json", declaration: {…} }
[repro] <repro-element> customElementsManifest: { manifestPath: "src/repro-element.ts", declaration: {…} }
```

The payload of `my-element` has no path of its module, `src/my-element.ts`.
The payload of `repro-element` has its module, in the same `manifestPath` field.
