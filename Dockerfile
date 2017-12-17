## Create image based on the official Node 6 image from dockerhub
#FROM node:latest
#
## Create a directory where our app will be placed
#RUN mkdir -p /usr/src/app
#
## Change directory so that our commands run inside this new directory
#WORKDIR /usr/src/app
#
## Copy dependency definitions
#COPY package.json /usr/src/app
#
## Install dependecies
#RUN npm install
#
## Get all the code needed to run the app
#COPY . /usr/src/app
#
## Expose the port the app runs in
#EXPOSE 80
#EXPOSE 443
#
## Serve the app
#CMD ["npm", "run", "serve"]

### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:8.1.4-alpine as builder

COPY package.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
#RUN $(npm bin)/ng build --prod
RUN npm run build

### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
