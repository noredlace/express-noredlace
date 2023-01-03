# express-noredlace
backend api site for my repo sites written in express.js

## Sample Get Request

[Recipes](https://express.noredlace.com/api/wakfu/recipes)

## Docker

[Docker Repo](https://hub.docker.com/repository/docker/noredlace/express-noredlace)

Command from Unraid
```
docker run -d --name='express-noredlace' --net='bridge' -e TZ="America/Chicago" -e HOST_OS="Unraid" -p '9797:3000/tcp' 'noredlace/express-noredlace'
```
