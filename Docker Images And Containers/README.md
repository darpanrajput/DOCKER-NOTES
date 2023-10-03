## Docker Commands
1. docker --help
2. if you wish to list down all images
   1. docker ps
   2. docker ps -a
3. docker run -p 8080:80 container-id/container-name
   1. this is used to start and create the container -it will be attached container 

### How to use docker
1. docker container can attached and detached depending how you start your container
   ```docker run -p 8080:80 container-id// will be attached container , this enables you to see the logs of the container```
2. this command is used to build docker image. the (.)dot indicate is to indicate where dockerfile is exist to build the images
   ``` docker build . ```
3. to stop a docker container
   ```docker stop  container-name/container-id```
4. to see the logs on a detached docker container use the below commands
   ```docker attach container-name/container-id ```
               OR
   ```docker logs -f container-name/container-id ``` 
   here -f indicates to follow