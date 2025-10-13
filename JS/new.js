function waitfortwoseconds()
{
    const ms=new Date().getTime()+8000;
    while(new Date().getTime()<ms);
}
function register()
{
    waitfortwoseconds();
    console.log("register end");
}
function sendemail()        
{
    waitfortwoseconds();
    console.log("email end");
}



