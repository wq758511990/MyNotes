FROM node:latest

RUN apk --update add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && apk del tzdata

RUN mkdir -p /usr/src/egg-app

WORKDIR /usr/src/egg-app

## add npm package

COPY package.json /usr/src/egg-app/package.json

RUN npm i --registry=https://registry.npm.taobao.org

# copy code

COPY . /usr/src/egg-app

EXPOSE 7001

CMD npm start