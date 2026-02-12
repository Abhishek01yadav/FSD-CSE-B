const http=require('http')
const myserver=http.createServer((req,res)=>{
//    console.log("server1")
//    res.end("this is my first server");
if(req.url=='/home'){
    res.end("this is my home page")
}

 else if(req.url=='/about us'){
    res.end("this is my about page")
}
 else if(req.url=='/about'){
    res.end(
  <img src="https://images.unsplash.com/photo-1531131141161-ecdfb1858dd2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlcnN8ZW58MHx8MHx8fDA=" />
);
    res.end("404 page is not found")
}


});

myserver.listen(8000,()=>console.log("server is run"));
