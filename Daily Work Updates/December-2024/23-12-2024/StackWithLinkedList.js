const { LinkedList } = require('../18-12-2024/LinkedList');


class Stack{
    constructor(){
        this.linkedList = new LinkedList();
    }

    push(value) {
        this.linkedList.addFirst(value);
        console.log(`Pushed element: ${value}`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return null;
        }
        const topValue = this.linkedList.head.value;
        this.linkedList.head = this.linkedList.head.next;
        console.log(`Popped element: ${topValue}`);
        return topValue;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Nothing to peek.");
            return null;
        }
        console.log(`Top element: ${this.linkedList.head.value}`);
        return this.linkedList.head.value;
    }

    isEmpty() {
        return this.linkedList.head === null; 
    }

    size() {
        return this.linkedList.size();
    }

    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
        } else {
            this.linkedList.traverse();
        }
    }
}

const stack = new Stack();
console.log("--------------------------------");
console.log("--------------------------------");
stack.push(10);
console.log("--------------------------------");
stack.push(20);
console.log("--------------------------------");
stack.push(30);
console.log("--------------------------------");
stack.printStack()
console.log("--------------------------------");
stack.peek(); 
console.log("--------------------------------");
stack.pop(); 
console.log("--------------------------------");
stack.printStack();
console.log("--------------------------------");
console.log("Size of stack:", stack.size());
console.log("--------------------------------");
stack.pop(); 
console.log("--------------------------------");
stack.pop(); 
console.log("--------------------------------");
stack.pop(); 
console.log("--------------------------------");
stack.printStack(); 
console.log("--------------------------------");
console.log("--------------------------------");