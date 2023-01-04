# Stage 1
FROM node:latest as node
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["node","index.js"]