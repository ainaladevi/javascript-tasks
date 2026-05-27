//1.
let user={
    name:"Devi",
    age:22
}

let userPerson={
    ...user}

 console.log(user);
 console.log(userPerson);

 //2.
 userPerson.name="Nitish";
 userPerson.city="Guntur";
 console.log("original", user);
 console.log("copied", userPerson);

 //3.

 let arr1 = [20,30,40,50,60]
 let arr2 = [...arr1]
 arr2.push(10);
 console.log(arr1);
 console.log(arr2);