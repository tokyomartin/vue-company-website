FROM node:14-alpine

#RUN npm install --global gatsby-cli
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh yarn python vim


RUN npm install

EXPOSE 8080