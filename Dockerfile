FROM node:16.1-slim AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.19.10-alpine AS production
WORKDIR /app
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


