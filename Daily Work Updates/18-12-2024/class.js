function isOperand(ch) {
    return (
        (ch >= 'a' && ch <= 'z') || 
        (ch >= 'A' && ch <= 'Z') || 
        (ch >= '0' && ch <= '9')
    );
}

class Stack{
    constructor(arr = []){
        this.stackArray = arr;
    }

    push(element) {
        this.stackArray.push(element);
    }

    
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const removed = this.stackArray.pop();
        return removed;
    }


    peek() {
        if (this.isEmpty()) {
            return null;
        }
        console.log(`Peek: ${this.stackArray[this.stackArray.length - 1]}`);
    }


    isEmpty() {
        return this.stackArray.length === 0;
    }

    size() {
        console.log(`Stack size: ${this.stackArray.length}`);
        return this.stackArray.length;
    }
}



let expression = "*A/B-AK";
let arr = [];
let stack = new Stack(arr);

for( let i = expression.length-1; i >= 0;i--){
    let ch = expression[i];

    if(isOperand(ch)){
        stack.push(ch);
    }
    else{
        let operand1 = stack.pop();
        let operand2 = stack.pop();
        let infix = `${operand1}${ch}${operand2}`;
        stack.push(infix);
    }
}

console.log(`The final infix expression is: `, stack.pop());