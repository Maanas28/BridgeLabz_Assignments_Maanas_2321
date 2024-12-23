class Queue {
    constructor() {
        this.queue = [];
    }

    add(value) {
        this.queue.push(value);
        console.log(`Added element: ${value}`);
    }

    poll() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot poll.");
            return null;
        }
        const removed = this.queue.shift();
        console.log(`Removed element: ${removed}`);
        return removed;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Nothing to peek.");
            return null;
        }
        console.log(`Front element: ${this.queue[0]}`);
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
        } else {
            console.log(`Queue elements: ${this.queue.join(', ')}`);
        }
    }
}

// Example usage:
const queue = new Queue();

console.log("-------------------------------");
console.log("-------------------------------");
queue.add(10);
console.log("-------------------------------");
queue.add(20);
console.log("-------------------------------");
queue.printQueue();
console.log("-------------------------------");
queue.peek();
console.log("-------------------------------");
queue.poll();
console.log("-------------------------------");
queue.printQueue();
console.log("-------------------------------");
queue.poll();
console.log("-------------------------------");
queue.printQueue();
console.log("-------------------------------");
queue.isEmpty();
console.log("-------------------------------");
