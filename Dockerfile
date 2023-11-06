FROM node:16

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 4200

CMD ["npm", "start", "--host", "0.0.0.0"]
