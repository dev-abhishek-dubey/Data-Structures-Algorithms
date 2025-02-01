// Get the value present at given index or position.

let index = 3;
// or let position = 4;

let arr = [1,2,3,4,5];

if (arr.length <= index) {
    console.log(null);
    return;
}

// if (arr.length < position) {
//     return null;
// }

console.log(arr[index]);
// return arr[position - 1];