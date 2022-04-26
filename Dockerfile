FROM amazonlinux:2

# production stage
FROM nginx:1.17.5-alpine as production-stage
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]