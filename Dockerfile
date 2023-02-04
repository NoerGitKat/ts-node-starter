FROM node:18

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY prisma/schema.prisma ./prisma/
RUN yarn prisma generate

COPY . .

EXPOSE 8080
CMD ["yarn", "start"]
