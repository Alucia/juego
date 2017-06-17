function isPrime(num) {
  var prime = true;
  for(var j = 2; j<= num/2 ; j++){
    if(num % j ==  0){
     prime = false;
    }
  }
  return prime;  	
}

function getPrimes(start, end) {
  var primerarray = [];
  for (var i = start; i < end; i++) {
    if (isPrime(i)) {
      primerarray.push(i);
    }
  }
  return primerarray;
}

module.exports = {'isPrime': isPrime, 'getPrimes': getPrimes};

console.log(getPrimes(2,20));