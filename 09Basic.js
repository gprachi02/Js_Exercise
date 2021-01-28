function* generatorFunc() {

    console.log("1. code before first yield");
    yield 100;

   console.log("2. code before the second yield");
    yield 200;

    console.log("3. code after the second yield");
    yield 300;
    
    console.log("4. code after the second yield");
    


}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());




console.log("******Passing Arguments to Generator Functions*********");



// generator function
function* generatorFunc() {

    // returns 'hello' at first next()
    let x = yield 'hello';
    
    // returns passed argument on the second next()
    console.log(x);
    console.log('some code');

    // returns 5 on second next()
    yield 5;
    
}

const generator1 = generatorFunc();

console.log(generator1.next());
console.log(generator1.next(6));
console.log(generator1.next());





console.log("******AsyncCall*********");


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();



  //one thread  Main thread no background
  //to blocking ui

//   Await and Asyn


  const https = require('https');

// Our Long Operation  
function fetchData(url) {
    
  const promiseToken = new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (rd) => data = data + rd);
      response.on('end', () => resolve(data));
    });
  });

  return promiseToken;
}

async function read() {
    const promisedData = await fetchData('https://www.javascript.com/');
    console.log(promisedData.length);
};


console.log('Program Starts');

read();

console.log('Program Ends');
  