function isSimple(i) {    
    let max = Math.sqrt(i);
    for(let j=2; j<=max; j++){                        
       if(i%j === 0){
          return false;
       }
    }
    return true;
 }

function getPrimes(count) {
    const primes = [];    
    for (let i=2; primes.length < count; i++) {
        console.log(i);
        if (isSimple(i)){      
            primes.push(i);            
            console.log(primes);
    }
}
}
console.log(getPrimes(process.argv[2]));

