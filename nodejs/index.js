const http=require('http')
const fs=require('fs');
const myserver=http.createServer((req,res)=>{
//    console.log("server1")
//    res.end("this is my first server");
if(req.url=='/home'){
    res.end("this is my home page")
}

 else if(req.url=='/about us'){
    res.end("this is my about page")
}
else if(req.url=="/img"){
    res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <h2>Here is your image:</h2>
    <img 
      src="https://imgs.search.brave.com/R5KzBfBya-b4MZuFG75K-Tduj6r6vKpbEBi-TFSfO0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzExMzExNDExNjEtZWNkZmIxODU4ZGQyP2ZtPWpwZyZxPTYwJnc9MzAwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjEuMCZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1UUjhmR1pzYjNkLGNuTjhaVzU4TUh4OE1IeDhmREE9"
      width="400"
    />
  `);
    

}
 
else{
    res.end("404 page is not found")}



});


 const result=fs.readFileSync("./cse-c.txt","utf-8");
 console.log(result);



//  fs.writeFile("./abc.txt", "hi we  are from abes", (err) => { 
//   if(err) {
//     console.log("error",err);
    
//   }
// });

// fs.readFile("./a.txt","utf-8",(err,result)=>{
//   if(err) { 
//     console.log("error",err);
//   }

//   else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./a.txt",` abes college is good`);
// fs.appendFile("./a.txt",` abes college is good`, ()=>{});
// fs.appendFile("./a.txt",` abes college is good`, (err)=>{
//   if(err){
//     console.log("error",err);
    
//   }
// });
// fs.cpSync("./a.txt","./b.txt");
// fs.cpSync("./a.txt","./b.txt",()=>{});
// fs.cpSync("./a.txt","./b.txt",()=>{
//   if(err) {
//     console.log(err);
    
//   }
// });

fs.unlinkSync("./a`.txt");``



myserver.listen(8000,()=>console.log("server is run"));


