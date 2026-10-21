FROM node:24-alpine AS builder
WORKDIR /guillen_rosie_ui_garden
COPY package.json package-lock.json ./
RUN npm ci
COPY public ./public
COPY src ./src
COPY tsconfig.json ./
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /guillen_rosie_ui_garden
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /guillen_rosie_ui_garden/build ./
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
