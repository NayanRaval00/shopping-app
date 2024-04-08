FROM node:alpine

RUN apk add --no-cache git

WORKDIR /app

EXPOSE 3001
COPY local-entrypoint.sh /usr/local/bin/local-entrypoint.sh
RUN chmod +x /usr/local/bin/local-entrypoint.sh
# Entrypoint for local development
ENTRYPOINT ["local-entrypoint.sh"]

# Start Development Server
CMD [ "yarn", "dev" ]