// ------------------------lesson - 5 -----------------: 

// const http = require('http');

// const server = http.createServer(( req,res)=>{
//     res.statusCode=200;
//     res.setHeader('content-type','application/json');
//     res.write("Page Not Found");
   
//     res.end(); 
 


// });
// server.listen(5000,()=>{console.log("Server Runing")}) ; 

//----------------- lesson 6 --------------- 
// sending response based on the url
const http  = require('http');
const server = http.createServer((req,res)=>{
    //1-res.write(req.url);
    if(req.url==='/home'){
        res.write('Welcome to the page');

    }else if(req.url==="/contact"){
        res.write('contact us here')
    }else if(req.url==="/create"){
        res.write('create a new account')
    }else{
        res.statusCode=404;
        res.write('page not found');
    }

    res.end()
})
 server.listen(5000,()=>{console.log("Server Runing")});

//---------- lesson 7 ----------------- 
// Express.js
// installation : 