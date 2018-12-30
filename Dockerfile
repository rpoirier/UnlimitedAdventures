FROM node:8

WORKDIR /app

# Install npm packages
COPY package*.json ./
RUN npm install --quiet

# Copy application files
COPY . .
