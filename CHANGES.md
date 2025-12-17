### 2025-12-15

- Fix: Se resolvió el error de PostCSS (ReferenceError: module is not defined) causado por `type: "module"` en `package.json`.
  - Se añadió `postcss.config.cjs` con `module.exports` (CommonJS).
  - Se convirtió `postcss.config.js` a ESM (`export default { ... }`) para ser compatible si se usa `type: "module"`.
