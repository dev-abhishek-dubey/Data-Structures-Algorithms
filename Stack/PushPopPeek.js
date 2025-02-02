// Stack implemented using array and linked list as well.

/**
 * Array Implementation
 */

let stack  = [12];

function pushStack(value, stack) {
    stack.unshift(value);
}

function popStack(stack) {
    stack.shift();
}

function peekStack(stack) {
    return stack.length ? stack[0] : null;
}

console.log("Initial Stack: " + stack);
pushStack(5, stack);
console.log("Stack After Pushing: " + stack);
popStack(stack);
console.log("Stack After Popping: " + stack);

/**
 * Linked List Implementation
 */

// Construct a node structure.
class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let arr = [5,2,7,9,1,8];
let top = new Node();
let tempNode = top;
for(let i = 0; i < arr.length; i++){
    tempNode.data = arr[i];
    if(i != arr.length - 1){
        tempNode.next = new Node();
        tempNode = tempNode.next;
    }
}

/**
 * Stack is prepared.
 * Push the element at the starting.
 * Pop the element from the start.
 */

function pushStackLL(value, top) {
    let tempNode = new Node(value);
    tempNode.next = top;
    return tempNode;
}

function popStackLL(top) {
    let tempNode = top;
    delete tempNode;
    return top.next;

}

function peepStackLL(head){
    return head != null ? head.data : null;
}

top = pushStackLL(15, top);
// while(null != top) {
//     console.log(top.data);
//     top = top.next;
// }
top = popStackLL(top);
top = popStackLL(top);
while(null != top) {
    console.log(top.data);
    top = top.next;
}
