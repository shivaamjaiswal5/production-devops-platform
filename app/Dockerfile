FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production --no-optional
COPY . .
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => {if (res.statusCode !== 200) process.exit(1)})"
CMD ["npm", "start"]