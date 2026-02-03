function add(a,b){
    console.log(a+b);
}
add(5,10);

const addition =(a,b) => a + b;
console.log(addition(7,8));

const single = x=> x * x;
console.log(single(6));

const greet = () => console.log("Hello, World!");
greet();

const result={
    stuname:"sakshi",
    designation:"developer",
    normal:function(){
        console.log("normal function this:",this.stuname);
        console.log("normal function designation:",this.designation);
    },
    arrow:()=>{
        console.log("arrow function this:",this.stuname);
        console.log("arrow function designation:",this.designation);
    }
}
result.normal();
result.arrow();

var arr =[1,2,3,4,5];

for(var  i=0;i<arr.length;i++){
    console.log(arr[i]*2);
}

 arr.forEach(i=>console.log("ForEach: ",i*2))

 let double = arr.map((value) => value * 2);
 console.log("Map: ",double);

 var arr=[1,2,3,5,4,8,7,234,123,34534,121]
 let filter = arr.filter((value)=>value>20)
 console.log("Filter: ",filter);

 let res = arr.find((value)=>value>100)
 console.log("Find: ",res);

 let some = arr.some((value)=>value>200)
 console.log("Some: ",some);

 let every = arr.every((value)=>value>230)
 console.log("Every: ",every);

 let fruits = ["apple","banana","grapes","mango"];

 let include = fruits.includes("banana");
 console.log("Includes: ",include);

 arr.sort((a,b)=>a-b);
 console.log("Sort: ",arr);

 arr.sort((a,b)=>b-a);
 console.log("Sort Descending: ",arr);