FROM node:21-alpine3.18
RUN mkdir nodejs 
WORKDIR ./nodejs
RUN apk --no-cache add git && git clone https://github.com/nikhatsultana639/js-e2e-express-server.git
WORKDIR ./js-e2e-express-server
RUN npm install
EXPOSE 3000
CMD ["npm" , "start"]
