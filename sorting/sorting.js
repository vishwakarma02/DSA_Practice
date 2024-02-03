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
    // [17, 66, 94, 46, 48, 10, 94, 5, 67, 90]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            while(array[i] > array[i+1]) {
                array[i] = array[i] + array[i+1];
                array[i+1] = array[i] - array[i+1];
                array[i] = array[i] - array[i+1];
            }
        }
    }
    console.log(array);
}

// selectionSort();
// bubbleSort();
insertionSort();