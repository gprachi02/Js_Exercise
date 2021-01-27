//Get the number of days in a month
console.log("Get the number of days in a month");

var getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  console.log(getDaysInMonth(1, 2021));
  console.log(getDaysInMonth(2, 2021));
  console.log(getDaysInMonth(9, 2021));
  console.log(getDaysInMonth(12, 2021));
  

//  function to get the current date. 
console.log("function to get the current date.");


var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    console.log(curday('/'));
    console.log(curday('-'));
    

    // Check whether an input is a date object or not
    console.log("Check whether an input is a date object or not");


    var is_date = function(input) {
        if ( Object.prototype.toString.call(input) === "[object Date]" ) 
          return true;
        return false;   
          };
      
      console.log(is_date("October 13, 2014 11:13:00"));
      console.log(is_date(new Date(86400000)));
      console.log(is_date(new Date(99,5,24,11,33,30,0)));
      console.log(is_date([1, 2, 4, 0]));
      


    //   Get the month name from a particular date

    console.log("Get the month name from a particular date");


    var month_name = function(dt){
        mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
          return mlist[dt.getMonth()];
        };
        console.log(month_name(new Date("10/11/2021")));
        console.log(month_name(new Date("11/13/2021")));
        

        // TO GET TODAY's DATE and TIME
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  
console.log(today);
console.log(time);


//Format a number up to specified decimal places
console.log("Format a number up to specified decimal places");


function decimals(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
      return false;
           n = parseFloat(n) || 0;
       return n.toFixed(d);
       }
   console.log(decimals(2.100212, 2));
   console.log(decimals(2.100212, 3));
   console.log(decimals(2100, 2));
   