var intervalID = setInterval(myCallback, 1000, 'Parameter 1', 'Parameter 2');

function myCallback(a, b)
{
 console.log(10);
 console.log(9);
 console.log(8);
 console.log(7);
 console.log(6);
 console.log(5);
 console.log(4);
 console.log(3);
 console.log(2);
 console.log(1);
 console.log('Time is up!');
}
function myStopFunction() {
    clearInterval(myCallback);
  }