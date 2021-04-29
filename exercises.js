let count = 0;

function mSort(array) {
    //if (count <= 3) {
    count++
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    
    return merge(left, right, array);
//}
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

let arr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

//console.log(mergeSort(arr))
//console.log(`count = ${count}`)

// 1. Understanding merge sort
// For this input array, merge sort requires 31 recursive calls in order to sort the array. 
// If there are less than 31 recursive calls, the base case will not be reached and there will be an error. 

// 2. Understanding quicksort
// 2. 1. The pivot could have been either 14 or 17. For both 14 and 17, the numbers to the left are smaller
// and the numbers to the right are larger

// 2. 2. a. 14, 17, 13, 15, 19, 10, 16, 12, 9, 3
// 2. 2. b. 3, 9, 14, 17, 13, 15, 19, 10, 16, 12

// 3. Implementing quicksort

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

let arr2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
   
//console.log(qSort(arr2))
   
// 4. Implementing merge sort (related functions at top of file)

//console.log(mSort(arr2))

// 6. bucket sort 
function countingSort(arr){
    let helper = []; // This helper will note how many times each number appeared in the arr
                     // Since JS arrary is an object and elements are not continuously stored, helper's Space Complexity minor that n
    for(let i = 0; i<arr.length; i++){
      if(!helper[arr[i]]){
          helper[arr[i]] = 1;
      }else{
          helper[arr[i]] += 1;
      }
    }
  
    let newArr = []; 
    for(i in helper){
      while(helper[i]>0){
          newArr.push(parseInt(i));
          helper[i]--;
      }
    }
    return newArr; 
  }
  
let arr3 = [5,4,3,2,1,0];
//console.log(countingSort(arr3)); // [0, 1, 2, 3, 4, 5]

// 7. Sort in place

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//console.log(arr3); // [5,4,3,2,1,0]
//shuffleArray(arr3)
//console.log(arr3); // shuffled

// 8. Sorting books in alphbetical order
// I would write a function to assign each book a number based on the alphabetical 
// location of it's title's first letter. Then I would use quick sort. Then convert back to letters.

let lettersToNums = {
    'a':1,
    'b':2,
    'c':3
    // and so on
}
let numsToLetters = {
    1:'a',
    2:'b',
    3:'c'
    // and so on
}

function letterNumGen(letters) {
    let out = []
    for (let i = 0; i < letters.length; i++) {
        out.push(lettersToNums[letters[i]])
    }
    return out;
}

function numLetterGen(nums) {
    let out = []
    for (let i = 0; i < nums.length; i++) {
        out.push(numsToLetters[nums[i]])
    }
    return out;
}

let input = ['b','a','c']

let unsortedLetters = letterNumGen(input)

let sortedLetters = qSort(unsortedLetters)

//console.log(numLetterGen(sortedLetters))