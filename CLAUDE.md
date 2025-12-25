# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a uni-app Vue 3 starter template that supports building for multiple platforms including WeChat Mini Program (default), H5, Alipay, Baidu, QQ, and other mini-programs.

## Common Commands

```bash
# Development (WeChat Mini Program - default)
pnpm dev

# Development for other platforms
pnpm dev:h5           # H5/Web
pnpm dev:mp-alipay    # Alipay Mini Program
pnpm dev:mp-qq        # QQ Mini Program

# Build (WeChat Mini Program - default)
pnpm build

# Build for other platforms
pnpm build:h5         # H5/Web
pnpm build:mp-alipay  # Alipay Mini Program

# Type checking
pnpm type-check
```

## Architecture

### Tech Stack
- **Framework**: Vue 3 with Composition API (`<script setup>`)
- **Build Tool**: Vite with @dcloudio/vite-plugin-uni
- **State Management**: Pinia with persisted state (uses `uni.getStorageSync/setStorageSync`)
- **Styling**: Tailwind CSS with uni-app adaptations via @uni-helper/vite-plugin-uni-tailwind
- **Icons**: @egoist/tailwindcss-icons with Carbon icon collection

### Key Configuration Files
- `src/pages.json` - Page routing and navigation bar configuration
- `src/manifest.json` - App metadata and platform-specific settings
- `tailwind.config.ts` - Uses different presets for mini-programs vs H5 (via @uni-helper/uni-env)
- `vite.config.ts` - Auto-imports configured for vue, uni-app, and pinia APIs

### Auto Imports
The project uses unplugin-auto-import to automatically import:
- Vue APIs (ref, reactive, computed, etc.)
- uni-app APIs (uni.*, onLaunch, onShow, etc.)
- Pinia APIs (defineStore, storeToRefs, etc.)
- Custom composables from `src/composables/`
- Stores from `src/stores/`

### Source Structure
- `src/pages/` - Page components (routing defined in pages.json)
- `src/styles/` - Global CSS (preflight, tailwind, main)
- `src/static/` - Static assets
- `src/App.vue` - Root component with app lifecycle hooks

### Path Alias
`@/` maps to `src/`
