
//alert("Hello World !!");
//alert("First value"||'antik');
//false || alert(null||0||undefined)
//alert(false &&'antik')
//alert('antik')&&alert('saha')&&1
/*let browser=prompt(`Enter your browser type:`,'');
if(browser=='Edge')
{
    alert( "You've got the Edge!" );
}
else if(browser=='Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera')
{
    alert( 'Okay we support these browsers too' );
}
else{
    alert( 'We hope that this page looks ok!' );
}*/
/*function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;

      alert(i);  // a prime
    }
  }

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }*/
/*let Age=prompt('Enter your age=',0);
 //showPrimes(primeno);
 //alert(isPrime(primeno));
 function checkAge(age) {
   //return (age < 18) && 1;
   return (age < 18) && confirm('Did parents allow you?');
 }
 alert(checkAge(Age));
 let confirmation=confirm('Did parents allow you?');
 alert(confirmation);*/

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );


//BMI = mass/height **2 (mass in kg and height in meter)

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 68,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }

};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};



(john.calcBMI() > mark.calcBMI()) ?

  console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`) :


  console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`);


