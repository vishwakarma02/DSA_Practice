const randomArray = (length = 5, limit = 100) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random()*limit));
    }
    return array;
}

const largestItemInArray = (arr = randomArray()) => {
    console.log(arr);
    let max = Number.MIN_VALUE; // MIN_VALUE = 5e-324
    arr.forEach(el => {
        if (el > max) {
            max = el;
        }
    });
    console.log(max);
    console.log(Math.max(...arr));
};

const secondLargestItemInArray = (arr = randomArray()) => {
    console.log(arr);
    let max = arr[0];
    let secondMax = Number.MIN_VALUE;
    arr.forEach(el => {
        if (el > max) {
            secondMax = max;
            max = el;
        }
        if (el < max && el > secondMax) {
            secondMax = el;
        }
    });
    console.log(secondMax);
}

const checkIfSortedArray = (arr = randomArray()) => {
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
            console.log('unsorted');
            return;
        }
    }
    console.log('sorted');  
}

const removeDuplicates = (arr = randomArray(100)) => {
    arr = arr.sort((a,b) => a-b)
    console.log(arr);
    const test = new Set();
    arr.forEach(el => test.add(el));
    console.log(test);
}

const leftRotationByOne = (arr = randomArray()) => {
    console.log(arr);
    // const firstItem = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //     arr[i-1] = arr[i];
    // }
    // arr[arr.length - 1] = firstItem;
    const temp = arr.shift();
    arr.push(temp);
    console.log(arr);
}

const leftRotationByN = (arr = randomArray(20, 10), n = 18) => {
    console.log(arr);
    // for (let i=1; i <= n % arr.length; i++) {
    //     const temp = arr.shift();
    //     console.log(temp);
    //     arr.push(temp);
    // }

    let z = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            z = i;
            break;
        }
    }
    for (let i=z, j = z+1; j < arr.length; j++) {
        if (arr[j] !== 0) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i = j;
        }
    }
    console.log(arr);
}

// largestItemInArray();
// secondLargestItemInArray();
// checkIfSortedArray();
// removeDuplicates();
// leftRotationByOne();
leftRotationByN();
