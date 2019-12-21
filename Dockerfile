FROM node:10.16.3-slim	

LABEL author="KaivnD"	

RUN mkdir -p /app	

COPY . /app	

WORKDIR /app	

RUN yarn
RUN yarn lint
RUN yarn test
RUN yarn build	

EXPOSE 3000	

ENV NODE_ENV=production	
ENV HOST 0.0.0.0

CMD [ "yarn", "start" ] 