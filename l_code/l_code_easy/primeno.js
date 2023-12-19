// find out the prime no in the given range.

for(let i = 1; i < 100; i++){
    let count = 0;
    for(let j = 1; j < 10; j++){
        if(i % j == 0){
            count++;
        }
    }
    if(count == 2){
        console.log(`${i} is a prime no`);
    }
}


