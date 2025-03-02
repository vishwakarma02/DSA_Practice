const randomArr = (length = 5) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}

const selectionSort = (arr = randomArr(10)) => {
    for (let i = 0; i < arr.length; i++) {
        let smallestItem = arr[i];
        let smallestItemIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < smallestItem) {
                smallestItem = arr[j];
                smallestItemIndex = j;
            }
        }
        if (i !== smallestItemIndex) {
            arr[smallestItemIndex] = arr[i];
            arr[i] = smallestItem;
        }
    }

    console.log(arr)
}

const bubbleSort = (array = randomArr(10)) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if (array[j] > array[j+1]) {
                const temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array);
}

const insertionSort = (array = randomArr(10)) => {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        let key = array[i];
        let j = i-1;

        while(array[j] > key) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = key;
    }
    console.log(array);
}

const mergeSort = (arr = randomArr(11)) => {
    console.log(arr);
    if (arr.length === 1) {
        return arr;
    }
    const leftArray = [];
    const rightArray = [];
    const length = arr.length;
    const mid = Math.floor(length / 2);
    
    for (let i = 0; i < mid; i++) {
        leftArray.push(arr[i]);
    }
    for (let i = mid; i < length; i++) {
        rightArray.push(arr[i]);
    }
    const left = mergeSort(leftArray);
    const right = mergeSort(rightArray);
    return merge(left, right);;
}

const merge = (left, right) => {
    let i = j = 0;
    const leftLength = left.length;
    const rightLength = right.length;
    const result = [];
    while (i < leftLength && j < rightLength) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while(i<leftLength) {
        result.push(left[i]);
        i++;
    }
    while(j<rightLength) {
        result.push(right[j]);
        j++;
    }
    return result;
}

const recursiveBubbleSort = (arr = randomArr(10)) => {
    console.log(arr);
    if (arr.length === 0) {
        return;
    }
    for (let i = 0; i<arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }           
    }
    console.log(arr);
    recursiveBubbleSort(arr.slice(0, arr.length-1));

    console.log(arr);
}

const recursiveInsrtionSort = (arr = randomArr(10), index = 1) => {
    if (index >= arr.length || index === 0) {
        return arr;
    }
    let j = index;
    while(arr[j] < arr[j-1] && j > 0) {
        const temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
        j--;
    }
    return recursiveInsrtionSort(arr, index+1);
}

console.log(recursiveInsrtionSort(arr, 1));

// selectionSort();
// bubbleSort();
// insertionSort();
// console.log(mergeSort());
// recursiveBubbleSort();
recursiveBubbleSort();