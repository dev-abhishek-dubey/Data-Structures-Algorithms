class Node 
{
    constructor(element){
        this.data = element;
        this.next = null;
    }
}

// Create a Linked List of 5 elements.
let arr = [5,3,7,3,8];
let iterator = new Node();
let head = iterator;
for(let i =0; i<arr.length;i++) {
    iterator.data = arr[i];
    if (i!=arr.length-1) {
        iterator.next = new Node();
        iterator = iterator.next;
    }
}

// Fetch the value from the list at position 3.

function fetchLLValue(head, reqIndex, currIndex) {
    if (currIndex < reqIndex) {
        return fetchLLValue(head.next, reqIndex, currIndex+1);
    }
    if (currIndex > reqIndex){
        return null;
    }
    return head.data;
}

console.log(fetchLLValue(head, 2, 0));