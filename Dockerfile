# https://hub.docker.com/_/node
FROM node:18-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install

RUN npm install pm2 -g

RUN npm run prebuild

RUN npm run build

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "pm2-runtime", "start","npm","--name","glarity", "start:prod" ]
# CMD [ "npm", "run", "start:prod" ]