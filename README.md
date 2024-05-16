# Bearmentor Redirect

Simple redirects or URL shorteners for quick business flows.

This project is using Remix. See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Setup

Install Bun or Node.js with npm/pnpm/Yarn.

## Development

Run the Vite dev server:

```sh
bun dev
```

## Deployment

First, build your app for production:

```sh
bun build
```

Then run the app in production mode:

```sh
bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `bun build`

- `build/server`
- `build/client`
