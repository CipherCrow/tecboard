# Copilot / AI Agent Instructions — tecboard

Purpose
- Short, actionable notes to make an AI agent productive working on this repo (React + Vite template with small project-specific quirks).

Quick commands
- Start dev server: `npm run dev` (uses `vite`) ✅
- Build production: `npm run build` (`vite build`)
- Preview production build: `npm run preview` (`vite preview`)
- Lint: `npm run lint` (runs `eslint .` using `eslint.config.js`)

Big picture
- Minimal single-page React app bootstrapped with Vite: primary source is `src/`.
- Entry: `src/main.jsx` (calls `createRoot` + `StrictMode`). Main component: `src/App.jsx`.
- Static/svg assets: store under `src/assets` and import relatively (e.g., `import reactLogo from './assets/react.svg'`). Root-absolute imports like `import viteLogo from '/vite.svg'` reference files in project root/public.
- Vite plugin: `@vitejs/plugin-react` (configured in `vite.config.js`). Note: `package.json` overrides `vite` to `npm:rolldown-vite@7.2.5` — treat the ronldown/rolldown-vite binding as the effective bundler in this project when troubleshooting bundling or native bindings.

Project-specific conventions & gotchas
- Files use `.jsx` for React components and `package.json` sets `type: "module"` — use ESM imports/exports everywhere.
- ESLint config: `eslint.config.js`—extends `@eslint/js`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.
  - Important rule: `no-unused-vars` uses `varsIgnorePattern: '^[A-Z_]'`. This means identifiers starting with an uppercase letter or underscore are intentionally ignored by the rule. Example: `const _temp = 1` will not error; this is a deliberate pattern to flag only certain unused vars.
- No test runner or test scripts detected in `package.json` (no `test` script). Assume no tests are present until added.
- No CI workflows were found in repo; do not assume automated pipelines exist.

How to make safe edits (examples)
- Add a new component: create `src/components/MyWidget.jsx`, `export default function MyWidget(){ return <div/> }`, import it in `src/App.jsx` and verify via `npm run dev`.
- Adding packages: update `package.json` and run `npm install`. When changing bundler/plugin behavior, remember the `vite` alias to `rolldown-vite` may require checking native bindings in `package-lock.json`.
- Fixing lint complaints: prefer following the project lint rules; to silence a local unused variable intentionally, prefix with `_` (e.g., `_unused`) rather than suppressing rules globally.

What to avoid / assumptions
- Do not change project to TypeScript without owner agreement (deps include `@types/*` for editor hints, but project is JS).
- Avoid removing `StrictMode` from `src/main.jsx` — it's part of intended development setup.

Key files to reference
- `package.json` (scripts, deps, `vite` override)
- `vite.config.js` (plugins)
- `eslint.config.js` (lint rules & conventions)
- `src/main.jsx`, `src/App.jsx`, `src/assets/` (bootstrap, main component, static assets)
- `README.md` (template notes)

If anything here is unclear or if you'd like more detail (CI, test guidance, or component patterns), tell me what to expand and I'll iterate. ✅