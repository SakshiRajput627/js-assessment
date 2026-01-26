// var info={
//     name:"sakshi",
//     age:25,
//     mob:12345,
//     id:34



// }

// console.log(info);

// var info={
//     math:{
//         add(a,b){
//             return a+b;
//         }
//     },
//     sub(a,b){
//         return a-b;
//     }
// }

// console.log(info.math.add(10,20));
// console.log(info.sub(10,20));


var info ={
    name:"sakshi",
    age:25,
    arr:[10,20,30,40],
    obj:{
        name:"vaishnavi",
        age:19
    }
}
console.log(info.arr[0]);
console.log("keys",Object.keys(info));
console.log("value",Object.values(info));
console.log(info.obj.name);

info.address="vijaynagar";
info.name="rajat";

console.log(info);

var stu=[{name:"sakshi",age:25},
{name:"rajat", age:30},
{name:"gaurav",age:40},
]

console.log(stu[0]);

