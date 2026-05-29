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

 //4.

 let obj = {
    name : "devi",
    age : 22,
    Address : {
         city : "Guntur",
         State : "AP"
    }
 }
  let obj1 = {
    ...obj
  }
  obj1.Address.city = "vjd"
  console.log(obj);
  console.log("copied", obj1);