function ClickMe(){
    alert("welcome")
}

 var onBtn=document.getElementById("On")
 var offBtn=document.getElementById("Off")

onBtn.addEventListener("click",
function (){
       alert("Button On");
   }
)

offBtn.addEventListener("click",
function (){
       alert("Button Off");
   }
)

var data = document.getElementById("userinput");
var button = document.getElementById("btn");
var output = document.getElementById("user");

button.addEventListener("click",function(){
output.innerText=data.value;
})


var first = document.getElementById("first");
var second = document.getElementById("second");
var addbtn = document.getElementById("add");
var output = document.getElementById("result");

addbtn.addEventListener("click",function(){
let addition = parseFloat(first.value) + parseFloat(second.value);
output.innerText=addition;
})