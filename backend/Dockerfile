FROM node:16
RUN npm install --global pnpm
WORKDIR /usr/src/app
COPY pnpm-lock.yaml .
RUN pnpm fetch
COPY . .
RUN pnpm install
CMD ["pnpm", "dev"]
