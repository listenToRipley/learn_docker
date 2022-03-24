## Backend notes 

From backend folder docker build -t goals-node . 
  Then docker run --name goals-backend --rm -d -p 80:80 goals-node

Talk on a single network 
  Have to update to container name on line 87 in app.js 
  rebuild docker build -t goals-node . 

  docker run --name goals-backend --rm -d -p 80:80 --network goals goals-node

  We need to still publish the port so the front end application can access localhost 

Include volumes or bind mount to hold onto information 
  docker run --name goals-backend -v $(pwd):/backend -v logs:/backend/logs -v /backend/node_modules --rm -d -p 80:80 --network goals goals-node