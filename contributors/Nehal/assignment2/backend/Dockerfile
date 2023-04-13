FROM node:16

WORKDIR /app

COPY package.json .

RUN npm i

# COPY . .
RUN mkdir -p /app/uploads && \
    chmod 777 /app/uploads
CMD ["node","app.js"]

EXPOSE 3001