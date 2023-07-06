let userDetails=true;

let promise= new Promise(function(resolve,reject){
    if(userDetails){
        setTimeout(()=>resolve("user details available"),5000);
    }
    else{
        setTimeout(()=>reject("No user details available"),5000);
    }
});
const getUserDetails=async()=>async()=>{
    let response=await promise;
    console.log({response})
}
 getUserDetails();