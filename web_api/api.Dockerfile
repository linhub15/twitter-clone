FROM denoland/deno:1.15.3
EXPOSE 4444
WORKDIR /api

USER deno

# Cache dependency as layer
COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache app.ts

CMD ["run", "--allow-net", "app.ts"]