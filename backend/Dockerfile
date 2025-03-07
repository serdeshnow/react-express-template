FROM node:lts-alpine

WORKDIR /base

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["pnpm", "run", "start"]
#RUN pnpm build
#CMD ["node", "dist/index.js"]