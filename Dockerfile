# --- Build Stage ---
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS build
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Build the application
ENV NODE_ENV=production
RUN bun run build

# --- Production Stage ---
FROM base AS release
# Copy ALL node_modules (including dev dependencies) to fix the vite issue
COPY --from=install /temp/dev/node_modules node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/bun.lock ./
COPY --from=build /usr/src/app/shared ./shared

# Expose port
EXPOSE 3000

# Run the app
USER bun
CMD ["bun", "start"]
