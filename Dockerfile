FROM amazonlinux:2

# develop stage
FROM node:16 as develop-stage
WORKDIR /app
COPY package*.json ./
COPY quasar.config.js ./
COPY ./ ./

# build stage
FROM develop-stage as build-stage
WORKDIR /app
RUN npm install
RUN npm install -g @quasar/cli
RUN quasar build -m spa

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/spa/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]