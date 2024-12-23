class Node {
    constructor(value) {
        this.value = value || null; // Node value
        this.next = null; // Reference to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Head node of the list
    }

    // Add a node at the end of the list
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

    // Remove a node with a specific value
    removeElement(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Add a node at the start of the list
    addFirst(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Get the size of the linked list
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Search for a node with a specific value
    searchElement(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    // Traverse and print the linked list
    traverse() {
        if (!this.head) {
            console.log("The linked list is empty!");
            return;
        }
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

// const list = new LinkedList();

// // Add elements to the list
// list.addElement(10);
// list.addElement(20);
// list.addElement(30);
// console.log("After adding elements:");
// list.traverse(); 

// console.log("----------------------------------------")

// // Add an element at the start
// list.addFirst(5);
// console.log("After adding an element at the start:");
// list.traverse();

// console.log("----------------------------------------")

// // Remove an element
// list.removeElement(20);
// console.log("After removing the element 20:");
// list.traverse(); 

// console.log("----------------------------------------")

// // Search for an element
// const foundNode = list.searchElement(10);
// console.log("Found node:", foundNode ? foundNode.value : "Not found"); 

// console.log("----------------------------------------")

// // Check the size of the linked list
// console.log("Size of the list:", list.size()); 

// console.log("----------------------------------------")

// // Traverse the list
// list.traverse();

// console.log("----------------------------------------")

module.exports = { LinkedList, Node };