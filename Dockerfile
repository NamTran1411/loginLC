# Start your image with a node base image
FROM node:18.17.1

# The /app directory should act as the main application directory
WORKDIR /Users/lc/Documents/loginLC

# # Copy the app package and package-lock.json file
# COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN yarn add --production
RUN yarn run build

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "build","yarn" ]