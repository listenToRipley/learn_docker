must download: 
[kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/)
[minikube](https://minikube.sigs.k8s.io/docs/start/)

# Understanding kubernetes
All about images - must have containers. Don't run containers on their own anymore.  
A way to skill and manage deployments independent from cloud service being used.
Scaling and load balancing and motoring 
Use configuration deployment. 

Past the configuration to cloud service or other computer with kubernetes set up. 
That configuration provide can also include configuration requirements for specific cloud services. 

It's open source project, can be used with any provider. 
Not an alternative to docker, but a way to deploy containers. 
Is a way to replace Docker-compose for multi-machines set up. 

# Worker nodes 
Pods: (docker run within the pod)
  Container resources: Volumes, IP, run config 
  kubelete - software communication device between master node and worker nodes 
  kube-proxy - software manage traffic and access to nodes. 
the machine, the VM. These contains pods (containers), configurations/proxy. The proxy needs to be set to it can reach this container. Different and equal worker nodes to make it more functional. 

# Master Node
  API Server - software running here. The counter point of the kubelete. 
  Scheduler - watches pods and choosing worker nodes that should be added/created for scaling or functionality. 
  Kube-controller-manager - watches and controls worker nodes. Responsible there is the correct number of pods up. This is dependent on API Server and Scheduler to be functional. 
  Cloud-control-manager - translates instructions to cloud provider. May not be required depending on the service you are using. 

The control plane : create, start, replace, restart and manage worker nodes. The control center that interacts with worker nodes. You just provide the desired end-state. 

# Cluster 
The master node and all the worker nodes collection the represent what we want the end state to be. 

# Services 
Group of pods with pod and container IP address. Related to proxies. Exposing pods to the outside world so they can be reached with specific IP addresses.  

# Works with Objects 
Known Objects:
  Pods - the smallest unit kubernetes knows and can interact with. has a cluster internal IP address by default. They do no persist. 
  Deployments - Controls multiple Pods. We set a desired target state and kubernetes should get us there. 
  Services
  Volumes 
  ... and more 

The idea is that you can create an object and then kubernetes will take the object and do something based on the instructions provided in the object. 
Creation occurs either: Imperatively or Declaratively. 

# Start using

kubectl - always executes on your local machine this the command that sends instructions to our cluster - the master node and control plane within the cluster. 
See instructions with this as kubectl help

1. docker build -t kub-first-app .  
2. Send to kubernetes' cluster :
  See if minikube is up and running: minikube status
    Success will look like: 
      minikube
      type: Control Plane
      host: Running
      kubelet: Running
      apiserver: Running
      kubeconfig: Configured

  If not running restart: minikube start: minikube start --driver=where you want your vm to start, either docker or virtualbox and test kubernetes 

  The cluster looks for the image provided. If the image only exists on the local machine, the cluster will not be able to be found. Send an image part of an image registry like docker hub: docker tag kub-first-app listentoripley/kube-first-app  
  Then: docker push listentoripley/kube-first-app 
  Now we should be able to use this image 

  kubectl create deployment first-app(name could be anything) --image=(which image should be used by the pod off this deployment) 
  example: kubectl create deployment kub-first-app --image=listentoripley/kube-first-app

  This will create a deployment objects - this is an imperatives approach to object creation. kubectl is formatted to be automatically connected to minikube, so no additional actions should be required to create this connection. 

  kubectl get deployments - can see deployments within the cluster you are connected to.   

3. Can see information by looking up: 
  kubectl get deployments 

  If you can access it the result should look something like: 
  NAME        READY   UP-TO-DATE   AVAILABLE   AGE
  first-app   1/1     1            1           4s

You can remove an object by providing: kubectl delete (type of object used) (name provided within the create command.)
If you can't remember the name you used, run the kubectl get (type of object) and you should see the name in the first column. 