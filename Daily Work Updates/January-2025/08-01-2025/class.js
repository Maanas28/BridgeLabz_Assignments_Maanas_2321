class Node {
    constructor(value) {
        this.value = value || null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addElement(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    removeElement() {
        if (!this.head) return null; 
        let value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    
    traverse() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}


let n = 5;
let linkedList = new LinkedList();
for(let i = 0; i < n; i++){
    //console.log("Adding element " + i);
    linkedList.addElement(i);
}

let values = linkedList.traverse();

// let value;
// while (value = linkedList.removeElement() !== null) {
//     values.push(value);
//     values.push()
// }

console.log(values); 
