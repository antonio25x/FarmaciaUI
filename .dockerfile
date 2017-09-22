FROM node:8.5.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli
RUN npm install
RUN ng -v
EXPOSE 4200
CMD [ "npm", "start" ]