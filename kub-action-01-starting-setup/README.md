must download: 
[kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/)
[minikube](https://minikube.sigs.k8s.io/docs/start/)

Understanding kubernetes: 
A way to skill and manage deployments independent from cloud service being used.
Scaling and load balancing and motoring 
Use configuration deployment. 

Past the configuration to cloud service or other computer with kubernetes set up. 
That configuration provide can also include configuration requirements for specific cloud services. 

It's open source project, can be used with any provider. 
Not an alternative to docker, but a way to deploy containers. 
Is a way to replace Docker-compose for multi-machines set up. 

# Worker nodes 
Pods: 
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