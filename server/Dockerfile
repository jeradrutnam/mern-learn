FROM node:18-alpine
WORKDIR /
COPY . .
RUN npm install --production
CMD ["node", "index.js"]
EXPOSE 5000

RUN useradd -ms /bin/bash mernlearnuser
USER mernlearnuser
WORKDIR /home/mernlearnuser
