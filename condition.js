let age=prompt("Enter age:")
if (age<=0){
    console.log("Invalid age");
}
else if (age>18){
    console.log("Eligible to vote");
}
else{
    console.log("not eligible to vote")
}

let number=Number(prompt("Enter Number:"))
if (number%2==0){
    console.log("even")
}
else{
    console.log("Odd")
}

let a=2
let b=4

if(a>b){
    console.log(a +" is largest");
}
else{
     console.log(b +" is largest");
}

let c=prompt("Enter number1")
let d=prompt("Enter number2")

if(c>d){
    console.log(c +" is largest");
}
else if(c==d){
    console.log("Both Are Equal");
}
else{
     console.log(d +" is largest");
}