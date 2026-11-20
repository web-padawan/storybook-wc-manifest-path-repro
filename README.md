# Repro: `customElementsManifest.manifestPath` has two meanings

Storybook 11.0.0-beta.3, `lit-vite/default-ts` sandbox.

- `my-element`: declared in `custom-elements.json`, set in `framework.options.customElementsManifest`.
- `repro-element`: declared in no manifest, so web components docgen reads the sources.
- `.storybook/log-manifest-path.js`: a docgen provider middleware that logs `customElementsManifest.manifestPath`.
- `typescript` is `~6.0.3`, as Storybook cannot generate declarations from sources with TypeScript 7.

## Steps

1. Run `yarn build-storybook`.
2. See the `[repro]` lines in the output.

## Result

```
[repro] <my-element> customElementsManifest.manifestPath = custom-elements.json
[repro] <repro-element> customElementsManifest.manifestPath = src/repro-element.ts
```

The first path is the manifest file. The second path is the module that declares the element.
