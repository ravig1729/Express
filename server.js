
// console.log("hello world !maccha hi");
//creating server

const express = require("express");

const server = express();

const middleware1 = (request, response, next) =>{
    console.log("Hello this is middleware1");
    next()   //next checks any other middlewares , if not it goes with server.get  and used to block the flow and take it back to the requested route.
}


const middleware2= (request, response, next) => {
    console.log("Hello this is middleware2");
}

server.use(middleware1);
// server.use(middleware2);

server.get("/",(request,response) =>{
    // response.send("hello world")
    response.send({name:"Ravi"})
    //in this we dont need to stringify like http methods.
})

server.get("/user",middleware2,(request,response) =>{
    response.send("how are you")
})

server.get("/run",(request,response) =>{
    response.send("<h1>Hello World</h1>")
})

server.listen(3001,() =>{
    console.log("server is running at port 3001");
})


//HTTP methods: To create a server and connect with both front End and backend ,get post put/update delete
//CRUD:create read update delete


//middlewares ::: is a fun , this fun takes 3 parameters , those are request, response, next ,,,you can create multiple middlewares.

//why do we need middlewares:: hoc in react. middleware is smthng which will be executed first before any route gets executed.


