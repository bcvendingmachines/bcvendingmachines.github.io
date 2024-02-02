FROM node:20-alpine3.19 AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:1.25.3-alpine
COPY --from=build /app/static/ /usr/share/nginx/html
EXPOSE 80
