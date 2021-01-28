console.log("First CallBack Program")
  
  function myFirst() {
    console.log("DEMO");
  }
  function myFirst1() {
    console.log("DEMO01");
  }
  myFirst();
  myFirst1();
  

  console.log("Calculator using callback")


  function myDisplayer(some) {
    console.log(some);

    //document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);



console.log("callback function for setTimeout")


setTimeout(myFunction, 3000);

function myFunction() {
    console.log("Yipee Time Out is working ..............");

  //document.getElementById("demo").innerHTML = "I love You !!";
}



console.log("Promise ")

function myDisplayer(some) {
    console.log(some);
    //document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 5;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );



  console.log("Promise using setTimeOut")

  let myPromise1 = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Yipee Time Out is working .............."); }, 3000);
  });
  
  myPromise1.then(function(value) {
    console.log(value);

  });