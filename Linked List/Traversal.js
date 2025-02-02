// A linked list is made up of chaining of nodes.
// Nodes = data + next (reference to the next node)

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
    if (i != arr.length-1) {
        iterator.next = new Node();
        iterator = iterator.next;
    }
}

while(head != null){
    console.log(head.data);
    head = head.next;
}