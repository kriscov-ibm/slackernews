# Dockerfile for WebApp
# To build the image run:
# $ docker build -t webapp .
# To run:
# $ docker run -d -p 3000:3000 webapp

FROM node:4-onbuild

# RUN mkdir -p /webapp

# WORKDIR /webapp

COPY package.json .
RUN npm update
RUN npm install

COPY . .

EXPOSE 3000

CMD npm start
