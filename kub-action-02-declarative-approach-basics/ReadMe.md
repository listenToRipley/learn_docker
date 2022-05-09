## about declarative process 

apiVersion
To know which apiVersion to use, [see the deployment example](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
This will be the latest version, so features may change over time. 

Kind 
States what we want to do, things like Service, Job

Metadata
[Not random, what can be added](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta)
indent
  Name - this information is up to use 

Spec: 
How the deployment should be configured.
replicas = how many pods to start with. It will default to 1.  Can be site to zero
template = define the pod that will be created. 

How to run
-f= either the name of doc or path with filename 

kubectl apply -f=deployment.yaml 

Kind - Services 
The service exposes clusters and pods to the outside world. So the service object should provide this function.

To get it running you use the same kubectl apply -f service.yaml 

See it with kubectl get services 

To get the port exposed, run minikube service name-of-service 


Additions resources 
https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/ 

https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#configmap-v1-core

https://kubernetes.io/docs/reference/