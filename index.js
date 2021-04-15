//importing modules
const http=require("http");
const url=require("url");
const fs =require("fs");

//connection
http.
createServer(function(request,response){
    if(request.url.includes("vegetables")){
        //read file from local project directory
        fs.readFile('data.json',function(err,data) {
            //send data to client
            response.setHeader("content-Type","application/json");
            //converting bufferdata into JSON format
            const dataFromFile=JSON.parse(data);
            response.write(JSON.stringify(dataFromFile));
            console.log(dataFromFile);
            return response.end();
        });   
    }
    else{
        response.write("server is running. ");
        response.write("You can send the request to server now");
        response.end();
    }
    })
.listen(8080);