FROM node:20-bookworm AS build

WORKDIR /usr/local/app

COPY package.json .
COPY .yarn .
COPY yarn.lock .
COPY .yarnrc.yml .
RUN corepack enable && yarn
COPY . .
RUN yarn build

FROM node:20-bookworm

WORKDIR /usr/app
COPY --from=build /usr/local/app/dist/my-portfolio ./
CMD node server/server.mjs

EXPOSE 4000
