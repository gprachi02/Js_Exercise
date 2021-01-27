let myArr = ["Fan", "Camera", 34, null , true];
//Array Method
console.log(myArr.length);
console.log(myArr);
myArr.push("harry") //to add value in array
console.log(myArr);
myArr.shift() //to remove [0] position value 
console.log(myArr);


//myArr.unshift()
//console.log(myArr);

console.log("=============")
const newLength = myArr.unshift("Harry")
console.log(newLen);
console.log(myArr);


// ######################

//String method java script

let myString = "Harry is a good boy boy";
console.log(myString.length)
console.log(myString.lastIndexOf("boy"))
console.log(myString.slice(0,4))
d = myString.replace("Harry","Rohan");
console.log(d)
