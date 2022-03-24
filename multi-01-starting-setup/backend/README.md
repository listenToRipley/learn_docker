## Backend notes 

From backend folder docker build -t goals-node . 
  Then docker run --name goals-backend --rm -d -p 80:80 goals-node

Talk on a single network 
  Have to update to container name on line 87 in app.js 
  rebuild docker build -t goals-node . 