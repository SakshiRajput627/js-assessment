let pwd=document.getElementById("pwd");
let message=document.getElementById("pwdmessage");
let pwdlen=document.getElementById("pwdlen");
let pwdno=document.getElementById("pwdno");
let pwdcap=document.getElementById("pwdcap");
let pwdspec=document.getElementById("pwdspec");
let btn=document.getElementById("btn");
let form = document.getElementById("form");
let btnvis=document.getElementById("btnvis");

// pwd.addEventListener("keyup",function(){
//     let value = pwd.value;
//     // if(value.length<8){
//     //     message.innerText="Password must be at least 8 characters long.";
//     //     message.style.color="red";
//     // }
//     // else if(!value.match(/[0-9]/)){
//     //     message.innerText="Password must contain at least one number.";
//     //     message.style.color="red";
//     // }
//     // else if(!value.match(/[/A-Z]/)){
//     //     message.innerText="Password must contain at least one uppercase letter.";
//     //     message.style.color="red";
//     // }
//     // else if(!value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
//     //     message.innerText="Password must contain at least one special character.";
//     // }
//     // else if(!value.match(/[0-9]/) || !value.match(/[/A-Z]/) || !value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
//     //      message.innerText="Weak Password"
//     //     message.style.color="red"
//     // }
//     //  else{
//     //     message.style.visibility="hidden";
//     // }
//      if(value.length<8){
//         pwdlen.innerText="Password must be at least 8 characters long.";
//        pwdlen.style.color="red";
//        pwdlen.style.visibility="visible";
//     }
//     else{
//         pwdlen.style.visibility="hidden";
//     }
//     if(!value.match(/[0-9]/)){
//         pwdno.innerText="Password must contain at least one number.";
//         pwdno.style.color="red";
//         pwdno.style.visibility="visible";
//      }
//      else{
//         pwdno.style.visibility="hidden";
//      }
//     if(!value.match(/[/A-Z]/)){
//       pwdcap.innerText="Password must contain at least one uppercase letter.";
//       pwdcap.style.color="red";
//       pwdcap.style.visibility="visible";
//     }
//     else{
//       pwdcap.style.visibility="hidden";
//     }
//     if(!value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
//         pwdspec.innerText="Password must contain at least one special character.";
//         pwdspec.style.color="red";
//         pwdspec.style.visibility="visible";
//     }
    
//     else{
//         pwdspec.style.visibility="hidden";
//     }
// })

// btn.addEventListener("click",function(e){
//     e.preventDefault();
//     let isvalid=true;
//     let value = pwd.value;
//      if(value.length<8){
//        pwdlen.innerText="Password must be at least 8 characters long.";
//       pwdlen.style.color="red";
//       pwdlen.style.visibility="visible";
//       isvalid=false;
//    }
//    else{
//        pwdlen.style.visibility="hidden";
//     }
//     if(!value.match(/[0-9]/)){
//         pwdno.innerText="Password must contain at least one number.";
//         pwdno.style.color="red";
//        pwdno.style.visibility="visible";
//         isvalid=false;
//     }
//      else{
//         pwdno.style.visibility="hidden";
//      }
//     if(!value.match(/[/A-Z]/)){
//       pwdcap.innerText="Password must contain at least one uppercase letter.";
//       pwdcap.style.color="red";
//       pwdcap.style.visibility="visible";
//        isvalid=false;
//     }
//     else{
//       pwdcap.style.visibility="hidden";
//     }
//     if(!value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
//         pwdspec.innerText="Password must contain at least one special character.";
//        pwdspec.style.color="red";
//       pwdspec.style.visibility="visible";
//        isvalid=false;
//   }
    
//    else{
//        pwdspec.style.visibility="hidden";
//    }
//    if(isvalid==true){
//     form.submit();
//   }

// })

btnvis.addEventListener("click",function(e){
    e.preventDefault();
     if (pwd.type === "password") {
        pwd.type = "text";   
    } else {
        pwd.type = "password";
    }
})
