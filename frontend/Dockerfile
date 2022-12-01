FROM node:16
RUN npm install --global serve
WORKDIR /usr/src/app
COPY . .
CMD ["serve", "--listen", "tcp://0.0.0.0:3000"]
