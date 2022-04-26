FROM amazonlinux:2

# develop stage
FROM node:16 as develop-stage
WORKDIR /app
COPY package*.json ./
COPY . .

# build stage
FROM develop-stage as build-stage
WORKDIR /app
RUN npm install -g @quasar/cli
RUN npm install
RUN quasar build -m spa

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/spa/ /usr/share/nginx/html
COPY --from=build-stage /app/confs/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]