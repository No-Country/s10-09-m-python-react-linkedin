# Use an official Node.js runtime as the base image
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

COPY . .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
# COPY . .

# Build the React app
RUN npm run build

# Use a lightweight HTTP server to serve the built React app
RUN npm install -g http-server

# Expose the port that the app will run on
EXPOSE 8080

# Command to start the server
CMD [ "http-server", "build" ]
