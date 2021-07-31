FROM node:current-alpine

ENV NEXT_PUBLIC_BACKEND_API_ENDPOINT=https://ciscc-api.pan93.tk
ENV NEXT_PUBLIC_GA_ID=G-6WK3R5CPLF
ENV STRAPI_ADMIN=https://ciscc-strapi.pan93.tk

# Copy this workdir to the docker image
COPY . fe
WORKDIR fe

# Install the dependencies
RUN yarn --production;

# Build the frontend
RUN yarn build;

# Run it
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
