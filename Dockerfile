FROM mhart/alpine-node:latest as build
ADD . /website
WORKDIR /website
RUN npm install
RUN npm run build
FROM mhart/alpine-node:latest
COPY --from=build /website/build /website/build
RUN npm install -g serve
WORKDIR /website
EXPOSE 5000
CMD ["serve", "-s", "build"]