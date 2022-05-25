const http = require("http"); // http module contains the function to create the server
const host = 'localhost';
const port = 8000;
//client
const requestListener = function (req, res) {
    res.writeHead(200);// sets the HTTP status code of the response
 // res.write("Hello There")// returs the text data
  res.write("<h1>Hello there</h1>") //sending html response
  // res.write(JSON.stringify({ name:"Shuchi", years: 22}))//Json response
  res.end();//returns data 
  
};

//server
const server = http.createServer(requestListener);//server passed the request to requestListener function
server.listen(port, host, () => {
    console.log(`Server is running on ${port}`);
});

