FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]

# FROM nginx:stable-alpine
# COPY nginx/nginx.conf /app/default.conf
# EXPOSE 80
# CMD [ "nginx", "-g", "daemon off;" ]