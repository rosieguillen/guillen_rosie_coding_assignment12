FROM node:24-alpine AS builder
WORKDIR /guillen_rosie_ui_garden_build_checks
ENV HUSKY=0
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run check && npm run build

FROM nginx:stable-alpine
WORKDIR /guillen_rosie_ui_garden_build_checks
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /guillen_rosie_ui_garden_build_checks/build ./
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]
