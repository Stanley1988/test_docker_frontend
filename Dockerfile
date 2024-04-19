# Use the official Node.js 14 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /home/images/frontend
# WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 6002

# Define the command to run your Node.js application
CMD ["node", "app.js"]