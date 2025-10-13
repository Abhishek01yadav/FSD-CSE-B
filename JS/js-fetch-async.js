const url = "https://dummyjson.com/users?limit=2";
const f1=async()=>{
    try{
    const res=await fetch(url);
    const jsondata=await res.json();
    jsondata.users.forEach((data)=>{
        console.log("Name=",data.firstName);
         console.log("Email=",data.email);
          console.log("Ip=",data.ip);
           console.log("Mac address=",data.macAddress);
           console.log("###########");
           
        

    })

}
catch(err){
    console.error("Error=",err.message)
    

}
}
f1()


