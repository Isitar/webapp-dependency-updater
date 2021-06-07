FROM node:14-alpine as base
FROM base as build

WORKDIR /app
COPY ./package.json ./
RUN npm install

COPY . ./
RUN npm run build

RUN rm -rf node_modules && npm install --production

FROM base as deploy
WORKDIR /app
COPY --from=build ./app/package.json .
COPY --from=build ./app/nuxt.config.js .
COPY --from=build ./app/node_modules ./node_modules
COPY --from=build ./app/.nuxt ./.nuxt
COPY --from=build ./app/static ./static

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80

CMD [ "npm", "run", "start" ]
