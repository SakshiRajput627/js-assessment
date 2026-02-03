// let name = document.getElementById("textinput");
// let rollNo = document.getElementById("numinput");
// let isPresent = document.getElementById("ispresent");
// let isAbsent = document.getElementById("isabsent");
// let displaybtn = document.getElementById("displaybtn");
// let student =[];





// isPresent.addEventListener("click",
// function (){
//    if(name.value=="" || rollNo.value==""){
//     alert("please fill all the details");
//    }
//    if(student.find(s=>s.rollNo == rollNo.value)){
//        alert("Student with this roll number already exists");
//        return;
//    }
//    else{
//        let studentName = name.value;
//        let studentRollNo = rollNo.value;
//        let attendanceStatus = "Present";

//        student.push({
//            name: studentName,
//            rollNo: studentRollNo,
//            attendance: attendanceStatus
//        });
//               isAbsent.checked = false;
// clearFields();
//    }
// });
// isAbsent.addEventListener("click",function(){
//     if(name.value=="" || rollNo.value==""){
//         alert("please fill all the details");
//        }
//        if(student.find(s=>s.rollNo == rollNo.value)){
//        alert("Student with this roll number already exists");
//        return;
//    }
//    else{
//        let studentName = name.value;
//        let studentRollNo = rollNo.value;
//        let attendanceStatus = "Absent";

//        student.push({
//            name: studentName,
//            rollNo: studentRollNo,
//            attendance: attendanceStatus
//        });
//        isPresent.checked = false;

//        clearFields();
//    }
// });

// displaybtn.addEventListener("click", function(){
//     console.clear();
//    if(student.length === 0){
//        alert("No student data available");
//        return;
//    }

//    student.forEach(element => {
//        console.log("Name: " + element.name + ", Roll No: " + element.rollNo + ", Attendance: " + element.attendance);
//    });
// });

// function clearFields(){
//     name.value="";
//     rollNo.value="";
   
// }


// let plusbtn=document.getElementById("plus");
// let minusbtn=document.getElementById("minus");
// let stock=document.getElementById("stock");
// let itemId = document.getElementById("itemno");
// let stockitem=[{ id: 1, name: "Pen", price: 10, quantity: 0 },
//     { id: 2, name: "Notebook", price: 50, quantity: 0 },
//     { id: 3, name: "Pencil", price: 5, quantity: 0 }];

// plusbtn.addEventListener("click",
// function (){
//     console.clear();
//        let currentStock = parseInt(stock.innerText);
//        stock.innerText = currentStock + 1;
//        stockitem.forEach(element => {
//            if(element.id === parseInt(itemId.value)){
//                element.quantity += 1;
//            }
//        });
       
//        displayitems();
      
// });

// minusbtn.addEventListener("click",
// function (){;
//     console.clear();
//        let currentStock = parseInt(stock.innerText);
//        if(currentStock > 0){
//            stock.innerText = currentStock - 1;
//        }
//       for(let i=0;i<stockitem.length;i++){
//         if(stockitem[i].id==parseInt(itemId.value)){
//             stockitem[i].quantity--;
//         }
//         if(stockitem[i].quantity==0){
//             stockitem.splice(i,1);
//                break;
//         }
     
//       }
//       displayitems();
        
      
        
// });

// function displayitems(){
//    stockitem.forEach(element => {     
//             console.log("ID: " + element.id + ", Name: " + element.name + ", Price: " + element.price + ", Quantity: " + element.quantity);
//        });
// }


let phnnumber=document.getElementById("phnnumber");
let recamount=document.getElementById("recamount");
let recbtn=document.getElementById("recbtn");
let validate = document.getElementById("validate");
let details = document.getElementById("details");
phnnumber.addEventListener("keyup",function(){
    let phn = phnnumber.value;
if(phn.length<10){
    validate.innerText="enter a validate number";
    validate.style.color="red";
}
else{
    validate.style.visibility="hidden";
}
})

recbtn.addEventListener("click",function(){
    let minamount = 50;
    if(validate.style.visibility === "hidden"){
        let phone = phnnumber.value;
        let amount = recamount.value;
        if(amount < minamount){
            alert("Minimum amount is " + minamount);
            return;
        } 
        let discount=0;
        if(amount > 500){
            discount = amount * 0.10; // 10% discount
        }
        let finalAmount = amount - discount;

        details.innerText = `Recharge Successful!
        Phone Number: ${phone}
        Recharge Amount: ₹${amount}
        Discount Applied: ₹${discount}
        Final Amount to be Paid: ₹${finalAmount}`;
        details.style.color="green";
    }
});


