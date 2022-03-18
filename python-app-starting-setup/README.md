Unlike other docker containers, docker run lacks are port and since it is missing front facing interface, the input has to be run within terminal. 

run docker run -i -t container#

To see what i and t are, run docker --help 

The container stop running automatically once executed. If you try to use docker start, it is automatically deattached and will need to be attached again. 

docker start -a container_name or docker start -a -i  