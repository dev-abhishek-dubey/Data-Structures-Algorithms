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
    if(i!=arr.length-1) {
        iterator.next = new Node();
        iterator = iterator.next;
    }
}


// Insertion of '1' at the start of the linked list
function insertStart(head, data) {
    // Create a node. point it's next to the head of the linked list.
    // Point the head to the new node.
    let node = new Node(data);
    node.next = head;
    return node;
}
head = insertStart(head, 19);

console.log(head.data);