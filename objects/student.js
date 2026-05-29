//1.
let student = {
    name: "Devi",
    Age:22,
    course:"BTech",
    address:{
        city: "Guntur",
        State: "Andhra Pradesh"
    },
};
console.log(student);
console.log(student.name);
console.log(student.Age);
//2.
console.log(student.address?.city);
//3.
for(let key in student){
    console.log(key,student[key]);
}
//4.
let studentCopy = {
    ...student,
    Age:23,
    college:"SMCE"
};
console.log(studentCopy);

//5.
//List of Marks--> Array

let arr = [90,80,70,60]
console.log(arr);

//user profile -->object

let userProfile = {
    name:"Devi",
    age:22,
    city:"Guntur",
};

console.log(userProfile);

//Shopping Cart Items -->Array

let cart = ["laptop","Television","AC","Refrigerator"]

console.log(cart);

//6.

let company= {
    name : "A2 Company",
    departments :[
        {
            id:101,
            name : "Finance",
            description : "Finance Department",
        },
        {
            id:102,
            name : "HR",
            description : "IT Department",
        }

    ]
};

console.log(company);
for (let key in company){
    console.log(key, company[key]);
} 
for(let dep in company.departments){
    console.log(dep, company.departments[dep]);
}
console.log(company.departments?.Finance?.manager);

//7.
let book={
    title:"Java Script",
    author:"John",
    rating:4.5,

describe(){
    console.log(`Book "${this.title}" by ${this.author}`);
}
};
book.rating=4.8;
console.log(book);
book.describe();

//8.
let movie={
    name:"RRR",
    director:"Rajamouli",
    year:2022
};
let product={
    name:"Laptop",
    price:50000,
    company:"ASUS"
};
let userProfile1={
    name:"devi",
    age:22,
    city:"Guntur"
};
console.log(movie);
console.log(product);
console.log(userProfile1);

console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(Object.entries(movie));