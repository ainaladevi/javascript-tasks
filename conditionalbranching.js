let age=prompt("Enter your age:");
let hasLicense= true;
if (age>18 && hasLicense){
    console.log("you can drive")
}
else{
    console.log("you can not drive")
}

let marks= Number(prompt("Enter your marks:"));
if (marks>90){
    console.log("Grade A")
}
else if (marks>80 && marks<=90){
    console.log("Grade B")
}
else if( marks>60 && marks<=80){
    console.log("Grade c")
}
else{
    console.log("Grade d")
}