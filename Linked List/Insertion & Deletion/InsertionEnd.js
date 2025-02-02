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
    if (i!=arr.length-1){
        iterator.next = new Node();
        iterator = iterator.next;
    }
}

// Inserting an element at the end of the linked list.

function insertEnd(head, data) {
    while(head.next != null) {
        head = head.next;
    }
    head.next = new Node(data);
}

insertEnd(head, 6);

while(head != null){
    console.log(head.data);
    head = head.next;
}