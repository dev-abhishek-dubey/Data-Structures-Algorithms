let arr = [1,2,3,5,6,7,8,9,10,];

// insert 4 at index 3.
let index = 3
// use splice method.

/**
 * 3 arguments for this method.
 * 1. Starting index.
 * 2. Number of elements to delete starting from the specified index.
 * 3. What value to insert at the index.
 */

arr.splice(index, 0, 4);
console.log(arr);

for (let i = index; i < arr.length; i++) {
    arr[i] = arr[i+1];
}
arr.pop();
console.log(arr);