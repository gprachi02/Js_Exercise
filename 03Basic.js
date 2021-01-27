//functions
//DRY = Do not Repeat yourself

console.log("Aithmatic Expression");

function avg(a, b) {
    //   c = (a + b)/2;
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(10, 10);
console.log(c1, c2);




//Conditionals 
console.log("Conditionals if/else");
var age = 18;
if (age < 4) {
    console.log('You can go')
} else {
    console.log('You cannot go')

}

//Loops

console.log("Loops for");
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
for(var i = 0;i<arr.length;i++){
    console.log(arr[i])
}

console.log("Loops forEach");

arr.forEach(function (element) {
    console.log(element)
})



//let : scope within function
//const : value never change 

let j = 0;
// const ac = 0 ;
//  ac ++;
//  ac=ac+1;
//  console.log(ac);

 console.log("Loops while");



while (j < arr.length) {
    console.log(arr[j]);
    j++
}

console.log("Loops do/while");

do {
    console.log(arr[j]);
    j++ //on it will go 
} while (j < arr.length);



console.log("break and Continue");
//break and Continue
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
         break;
       // continue;
    }
    console.log(arr[i])
}




console.log("value can be override");

var a = 101
  {
  a = 1;
  }
  console.log(a) 
  //output 1



  console.log("print 1 2 ...");

var x,y,chr;
for(x=0; x <5; x++)
{

    chr=x+1; 
    console.log(chr);
}

console.log("print * functions");

var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}
