//1.Ways to print in JavaScript

console.log("HELLO WORLD");
// alert("ME");
//document.write("this is document")


//2.JavaScript console API


console.log("HELLO WORLD", 4 + 6, "Another log");
console.warn("This is warning");
console.error("This is an error");



//3.JavaScript Variables

//Variables :Containers to store data variables

var num1 = 21;
var num2 = 10;
console.log(num1 + num2);



//4.DataTypes in JavaScript

//String
var str1 = "This is String";
var str2 = 'This is also String';
console.log(str1)
//Number
var num1 = 455;
var num2 = 56.75;
//Objects
var marks = {
    ravi: 34,
    rashmi: 74,
    rita: 94.2

}


console.log(marks);


//Booleans

var a = true;
var b = false;

console.log(a, b);

//undefined : created variable and leave 

//var und = undefined;
var und;
console.log(und);

//null : no value

var n = null;
console.log(n);


//Primitive data type 
//undefined, null,number,string,boolean,symbol


// Reference data type 
//Arrays and Objects

var arr = [1, 2, "All is well", 4, 5]
console.log(arr[3]);
console.log(arr);




//Aithmatic Operators

var a = 100;
var b = 10;

console.log("The Value of a+b is", a + b);
console.log("The Value of a-b is", a - b);
console.log("The Value of a*b is", a * b);
console.log("The Value of a/b is", a / b);


//Assignment Operator

var c = b;
//c+=2;
c -= 2; //c=c-2
//c *=2;
//c /=2
console.log(c)


//Compare 2 values
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);



//Logical operators

console.log(true && true);
console.log(true && false);
console.log(false && false);



console.log(true || true);
console.log(true || false);
console.log(false || false);


//Logical not

console.log(!true);
console.log(!false);





