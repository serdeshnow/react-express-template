FROM node:18-alpine

WORKDIR /base

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["pnpm", "run", "start"]
