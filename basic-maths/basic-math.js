const gcd = (a=32, b=72) => {
    if (b === 0 ) {
        return a;
    }
    return gcd(b, a%b);
}

const armstrongNumber = (num = 912985153) => {
    const str = ''+num;
    const power = str.length;
    const strArr = str.split('');
    let sum = 0;
    strArr.forEach(e => {
        sum += e**power
    })
    console.log(sum === num ? 'Armstrong number' : 'Not an Armstrong number');
}

const allDivisors = (num = 36) => {
    for(let i = 0; i*i < num; i++) {
        const quotient = num / i;
        if (!Number.isInteger(quotient)) {
            continue;
        }
        if (quotient === i ){
            console.log(i);
            continue;
        }
        console.log(i, quotient);
    }
}

const checkForPrime = (num=53) => {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num%i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? num+' is Prime Number' : num+' is Not a Prime Number');
}

const sumOfFirstNNumbers = (num = 5) => {
    let sum = 0;
    const summation = (a = num) => {
        if (a === 0) {
            return sum;
        }
        sum += a;
        return summation(a -1);
    }

    console.log(summation());
}

const mostOccuringCharacterInString = (str = 'mahamana madan mohan malviya') => {
    let obj = {};
    for (let index = 0; index < str.length; index++) {
        const letter = str[index];
        if (!obj[letter]) {
            obj[letter] = 1;
            continue;
        }
        obj[letter] = obj[letter] + 1;
    }
    let moc = '';
    let countOfMoc = 0;
    Object.entries(obj).forEach(el => {
        if (el[1] > countOfMoc) {
            moc = el[0];
            countOfMoc = el[1];
        }
    })
    console.log(moc);
}

// console.log(gcd());
// armstrongNumber();
// allDivisors();
// checkForPrime();
// sumOfFirstNNumbers();
mostOccuringCharacterInString();