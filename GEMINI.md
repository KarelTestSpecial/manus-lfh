# Project Context: manu-lfh

## Overview
**manu-lfh** is a React-based web application built with Vite. It appears to be an educational or informational platform focused on health and longevity, featuring modules on topics like Aging, Autophagy, Inflammation, and Defense Systems.

## Technical Architecture

### Core Stack
- **Runtime:** Node.js (Use `pnpm` for package management)
- **Framework:** React v18
- **Build Tool:** Vite v5
- **Routing:** `react-router-dom` v6
- **Type System:** JavaScript (ES Modules)

### Project Structure
- **`src/`**: Main source directory.
  - **`App.jsx`**: Root component, likely handles the main layout and routing configuration.
  - **`components/`**: Feature-specific components corresponding to health topics (e.g., `DefenseSystems.jsx`, `Microbiome.jsx`, `Mitochondria.jsx`).
  - **`App.css`**: Global styles.

## Development Workflow

### Installation
```bash
pnpm install
```

### Key Scripts
- **Start Dev Server:** `pnpm dev` (Runs Vite)
- **Build for Production:** `pnpm build` (Generates `dist/` folder)
- **Lint Code:** `pnpm lint` (Runs ESLint)
- **Preview Build:** `pnpm preview`

## Conventions & Standards

### Code Style
- **Components:** Functional components using React Hooks.
- **Imports:** ES Module syntax (`import`/`export`).
- **File Naming:** PascalCase for React components (`MyComponent.jsx`).

### System Directives (Global)
- **Package Management:** Always use `pnpm` to save disk space.
- **Python:** Use `python3` if python scripts are required (though none observed yet).
- **UI Theme:** Dark mode is preferred for generated UI elements.
