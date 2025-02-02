// Queue implemented using array and linked list as well.

/**
 * Array Implementation
 */

let queue  = [12];

function pushqueue(value, queue) {
    queue.unshift(value);
}

function popqueue(queue) {
    queue.pop();
}

function peekqueue(queue) {
    return queue.length ? queue[queue.length - 1] : null;
}

console.log("Initial queue: " + queue);
pushqueue(5, queue);
console.log("queue After Pushing: " + queue);
popqueue(queue);
console.log("queue After Popping: " + queue);

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
 * Queue is prepared.
 * Push the element at the starting.
 * Pop the element from the start.
 */

function pushqueueLL(value, top) {
    let tempNode = new Node(value);
    tempNode.next = top;
    return tempNode;
}

function popqueueLL(top) {
    while(null != top.next.next) {
        top = top.next;
    }
    delete top.next;

}

function peepqueueLL(top){
    if (null != top) {
        while(null != top.next){
            top = top.next;
        }
        return top.data;
    }

    return null;
}

top = pushqueueLL(15, top);
// while(null != top) {
//     console.log(top.data);
//     top = top.next;
// }
console.log(peepqueueLL(top));
popqueueLL(top);
console.log(peepqueueLL(top));
popqueueLL(top);
console.log(peepqueueLL(top));
while(null != top) {
    console.log(top.data);
    top = top.next;
}
