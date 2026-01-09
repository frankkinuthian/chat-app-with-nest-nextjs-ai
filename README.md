# Vercel AI SDK + NestJS + Next.js Chat

A full-stack AI chat application built with the Vercel AI SDK, featuring a NestJS backend and Next.js frontend in a Turborepo monorepo.

## Features

- 🤖 AI-powered chat with streaming responses
- 🔧 Custom tools support via Vercel AI SDK
- 🌐 Multi-model support through Vercel AI Gateway
- ⚡ Real-time streaming with React hooks
- 🎨 Modern UI with Tailwind CSS
- 📦 Monorepo structure with Turborepo

## Architecture

### Apps

- **`backend`**: NestJS REST API server with AI SDK integration
  - Handles chat requests with streaming responses
  - Custom tools implementation
  - CORS-enabled for frontend communication
- **`web`**: Next.js 16 frontend with Turbopack
  - Real-time chat interface using `@ai-sdk/react`
  - Model selection UI
  - Streaming message display

### Packages

- `@repo/ui`: Shared React component library
- `@repo/eslint-config`: ESLint configurations
- `@repo/typescript-config`: TypeScript configurations

All apps and packages are written in [TypeScript](https://www.typescriptlang.org/).

## Prerequisites

- [Bun](https://bun.sh/) >= 1.3.4
- Node.js >= 18
- Vercel AI Gateway API key

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Environment Setup

Create `.env` files in both apps:

**Backend (`apps/backend/.env`):**
```env
AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key
FRONTEND_URL=http://localhost:3000
```

**Frontend (`apps/web/.env`):**
```env
API_URL=http://localhost:3003
NEXT_PUBLIC_API_URL=http://localhost:3003
```

See `.env.example` files in each app directory for reference.

### 3. Run Development Servers

**Option 1: Run both apps together (if configured):**
```bash
bun turbo dev
```

**Option 2: Run individually:**
```bash
# Terminal 1 - Backend (port 3003)
cd apps/backend
bun run dev

# Terminal 2 - Frontend (port 3000)
cd apps/web
bun run dev
```

### 4. Access the App

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS, Vercel AI SDK
- **Backend**: NestJS, Vercel AI SDK, Express
- **Tooling**: Turborepo, TypeScript, ESLint, Prettier
- **Runtime**: Bun

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
