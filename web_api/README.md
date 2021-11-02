* `sudo docker-compose up --remove-orphans`
* `sudo docker ps -a`


### detached
* `sudo docker run -d denoland/deno:1.15.3`
* `docker attach <id|name>`


### environment variable

### mount mysql to volume
* the docker volume lives in `/var/lib/docker/volumes/data_volume`
`sudo docker run -v data_volume:/var/lib/mysql mysql`
```
sudo docker run \
--mount type=volume,source=data_volume,target=/var/lib/mysql \
mysql
```

###