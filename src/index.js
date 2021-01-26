import "./styles.css";

document.getElementById("app").innerHTML = isPrime(19);

function isPrime(num) {
  /* if (num <= 1) return "Not a prime number";
  if (num === 2 || num === 3) return "Is  prime number";
  for (let i = 2; i < Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) return "Not a prime number";
  }
  return "Is a prime number"; */

  //sieve implementation
  let notPrime = [],
    i,
    j,
    primes = [];
  for (i = 2; i < num; ++i) {
    //if i is not in notPrime array it is prime and push it into primes array;
    if (!notPrime[i]) {
      primes.push(i);
      for (j = i << 1; j <= num; j += i) {
        //multiples of i means not prime, so push into notPrime array;
        notPrime[j] = true;
      }
    }
  }
  return primes;
}

console.time();
isPrime(7);
console.timeEnd();
