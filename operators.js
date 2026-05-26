//Arithmetic operators
let a=5
let b=2
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//Assingment operators
let count=5
count=count+1
console.log(count);
++count
console.log(count);
count++
console.log(count);
//Comparison operators
console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(5==="5");
console.log(5===5);
//logical operators
let age=22
let number=5
console.log(age>18 && number<5);
console.log(age>18 && number<10);
console.log(age>18 || number<5);
console.log(age>25 || number<5);
console.log(!age>18);
// Nullish Coalescing Operator
let name=" "
alert(name ?? "Guest");
let name1=null
alert(name1 ?? "Guest");