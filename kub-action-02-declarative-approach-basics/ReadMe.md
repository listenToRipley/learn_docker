## about declarative process 

REMEMBER THAT MINIKUBE SHOULD BE STARTED BEFORE YOU START THESE PROCESSES 

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

 If you make updates, then you can run this same apply command again after the changes are made to the saved yaml doc. 

Kind - Servic es 
The service exposes clusters and pods to the outside world. So the service object should provide this function.

To get it running you use the same kubectl apply -f service.yaml 

See it with kubectl get services 

To get the port exposed, run minikube service name-of-service 

Deleting
You can delete an item by using the yaml file name. 
kubectl delete -f=deployment.yaml 

This will delete the resources created by this file, not the file itself. 

Can add more than one by includes , between after -f or have multiple -f 

You can use imperative delete if you wanted. 

You can also delete by labels. Ths labels should be added in the metadata with groups. 
kubectl delete deployments,services -l group=example 

you have to let the system know which services you want to remove between the delete and -l 


Additions resources 
https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/ 

https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#configmap-v1-core

https://kubernetes.io/docs/reference/