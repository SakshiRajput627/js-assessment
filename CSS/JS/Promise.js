let promise = new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("Promise resolved successfully.");
    }else{
        reject("Promise rejected.");
    }
});

promise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});


 fetch("https://jsonplaceholder.typicode.com/users")
 .then((response)=>response.json())
 .then((data)=>console.log(data))
 .catch((err)=>console.log("Error is :",err))

 async function fetchdata(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log("Error is :",err)
    }
 }

 fetchdata();