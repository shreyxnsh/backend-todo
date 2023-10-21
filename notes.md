To create an API :

Step 1 : Create the model, make the schema, make a collection of that data 
Step 2 : Create a route for that api 
// the frontend uses these routes to add in data (post) to the api
Step 3 : Create a services file of that api where you add in all the functions you need to implement
Step 4 : Create a controller file which fetches the data and sets request and response of the api 

Last step : after api is created and route is also made
import the route in the app.js file

functions are created in services
used and controlled in controllers
used by routes

Flow : 
 - model
 - route
 - services
 - controller

  - route
  - controller
  - services
  - app.js