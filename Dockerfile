FROM node:18-alpine

WORKDIR /feature

COPY . .

RUN npm install

CMD ["npm", "start"]
