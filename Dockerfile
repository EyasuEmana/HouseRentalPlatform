FROM node:alphline
COPY . /app
WORKDIR /app
CMD node server.js