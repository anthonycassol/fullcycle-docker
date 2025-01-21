# Fetching the minified node image on apline linux
FROM node:22

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y \
    wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copying all the files in our project
COPY ./src .

# Installing dependencies
RUN npm install

# Exposing server port
EXPOSE 3000