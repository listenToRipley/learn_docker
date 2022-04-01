### notes on deployment. 
1.  docker build -t node-dep-example . 
2. docker run -d --rm --name node-dep -p 80:80 node-dep-example

Bind Mounts, Volumes & COPY 

In production, the container should work as a standalone. It should not be dependent on source code on the remote machine. - Single source of truth. 

Build for production should depend on COPY. Will have the source code 

https://docs.docker.com/engine/install/ (under "Server"). 

Inside the AWS connection once you have the [SSH Client connected](https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#ConnectToInstance:instanceId=i-0e71609fc93376acb): 

sudo yum update -y

sudo amazon-linux-extras install docker 
This will install docker on remote machine. 

sudo service docker start

We need to add image to AWS remote machine. 


This with setup once you are connected, (you can use the same ssh -i connect command to reconnect it your connection becomes broken.)
