FROM node:alpine

# Create app directory
WORKDIR /opt/app

# Copy package.json & package-local.json
COPY package*.json ./

# Installing packages
RUN npm install

# Copy all the files
COPY . .

# Start process
CMD npm start
