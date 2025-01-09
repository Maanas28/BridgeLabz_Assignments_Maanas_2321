class Stack {
    constructor(arr = []) {
        this.stackArray = arr; 
    }


    push(element) {
        this.stackArray.push(element);
        console.log(`Pushed: ${element}`);
        this.printStack();
    }

    
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Nothing to pop.");
            return null;
        }
        const removed = this.stackArray.pop();
        console.log(`Popped: ${removed}`);
        this.printStack();
        return removed;
    }


    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Nothing to peek.");
            return null;
        }
        console.log(`Peek: ${this.stackArray[this.stackArray.length - 1]}`);
        return this.stackArray[this.stackArray.length - 1];
    }


    isEmpty() {
        return this.stackArray.length === 0;
    }

    size() {
        console.log(`Stack size: ${this.stackArray.length}`);
        return this.stackArray.length;
    }


    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
        } else {
            console.log("Stack (top -> bottom):");
            console.log(this.stackArray
                .slice().reverse()
                .map((item, index) => ` ${index + 1}: ${item}`)
                .join("\n"));
        }
        console.log("-----------------------------------");
    }
}

const externalArray = [];
const stack = new Stack(externalArray);


stack.push(10);
stack.push(20);
stack.push(30);
stack.peek();
stack.pop();
stack.size();
stack.pop();
stack.pop();
stack.pop();
stack.push(12);
stack.push(15);
stack.push(22);

console.log("Final Array:", externalArray);
