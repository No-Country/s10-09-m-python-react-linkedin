FROM node:20-alpine AS builder

WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY . .

# Install the dependencies
RUN npm install --force

# Build the Angular app
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:1.21

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the previous stage to the Nginx web server directory
COPY --from=builder /app/dist/ /usr/share/nginx/html/

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Expose the default Nginx port (80)
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

#test ci#







# # Use an official Node.js runtime as the base image
# FROM node:20-alpine3.17

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# COPY . .

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# # COPY . .

# # Build the React app
# RUN npm run build

# # Use a lightweight HTTP server to serve the built React app
# RUN npm install -g http-server

# # Expose the port that the app will run on
# EXPOSE 8080

# # Command to start the server
# CMD [ "http-server", "build" ]
