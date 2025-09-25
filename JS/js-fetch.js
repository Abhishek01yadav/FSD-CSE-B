

const url = "https://dummyjson.com/users?limit=2";// user depends upon limit value
const pr = fetch(url);
      pr.then((res)=>{
        return res.json();

      })
// displaying without using for-Each loop && for one user
      /*
      .then((data)=>{
          console.log("name=",data.users[0].firstName);
          console.log("email=",data.users[0].email);
          console.log("ip=",data.users[0].ip);
          console.log("Mac Address=",data.users[0].macAddress);
      })
*/
      .then((data)=>{
        data.users.forEach((da)=>{
          console.log("name=",da.firstName);
          console.log("email=",da.email);
          console.log("ip=",da.ip);
          console.log("Mac Address=",da.macAddress);
        })
      })
      .catch((err)=>{
        console.error("Error",err.message)
      })




