# express-noredlace
backend api site for my repo sites written in express.js

## Sample Get Requests

[ProfessionsAPI Sample](https://express.noredlace.com/api/wakfu/professions)

[ChefRecipesAPI Sample](https://express.noredlace.com/api/wakfu/profession/chef)

## Docker

[Docker Repo](https://hub.docker.com/repository/docker/noredlace/express-noredlace)

Command from Unraid
```
docker run -d --name='express-noredlace' --net='bridge' -e TZ="America/Chicago" -e HOST_OS="Unraid" -p '9797:3000/tcp' 'noredlace/express-noredlace'
```
