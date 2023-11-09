FROM node:18-alpine as build
ARG SERVER_URL
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY *.json *.lock ./
RUN npm i react-scripts@latest --force
COPY . .
RUN REACT_APP_SERVER_URL=${SERVER_URL} npm run build