var atmbtn=document.getElementById("atmbtn");
atmbtn.addEventListener("click",
function (){
       let username="sakshi";
       let password="sakshi@627";
       let balance="83000";

      let user= prompt("enter username");
      let pwd= prompt("enter password");

      if(user!=username || pwd != password){
        alert("invalid userid and password");
      }
      let choice =prompt("enter your choice: 1. Balance 2. Withdraw");

      if(choice==1){
        alert("your balance is:"+balance);
      }
      else if(choice==2){
        let withdraw = parseFloat(prompt("enter amount to withdraw"));
        if(withdraw>balance){
          alert("insufficient balance");
        }
        else if(withdraw % 100 !=0){
            alert("please enter amount in multiple of 100");
        }
        let remaining = withdraw;
        let notes500=Math.floor(remaining/500);
        remaining=remaining%500;
        let notes200=Math.floor(remaining/200);
        remaining=remaining%200;
        let notes100=Math.floor(remaining/100);
        remaining=remaining%100;
        balance=balance-withdraw;
        alert("please collect your cash:\n 500rs notes:"+notes500+"\n 200rs notes:"+notes200+"\n 100rs notes:"+notes100+"\n remaining balance:"+balance);
      }
      else{
        alert("invalid choice");
      }

   }
)