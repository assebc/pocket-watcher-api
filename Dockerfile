FROM node:20

WORKDIR /transactions/src/app

COPY ./src .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]