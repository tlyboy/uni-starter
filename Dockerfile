FROM node:20-alpine as build-stage

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM caddy as production-stage

COPY --from=build-stage /app/dist/build/h5 /app
COPY Caddyfile /etc/caddy/Caddyfile
