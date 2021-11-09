FROM denoland/deno:1.15.3
EXPOSE 4444
WORKDIR /

USER deno

# Cache dependency as layer
COPY ./api/deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache ./api/app.ts

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "./api/app.ts"]