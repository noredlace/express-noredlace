# express-noredlace
backend api site for my repo sites written in express.js


## Docker
Command from Unraid
```
docker run -d --name='express-noredlace' --net='bridge' -e TZ="America/Chicago" -e HOST_OS="Unraid" -p '9797:3000/tcp' 'noredlace/express-noredlace'
```