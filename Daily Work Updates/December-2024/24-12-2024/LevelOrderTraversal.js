const { BinarySearchTree } = require('./BinarySearchTrees');
const { Queue } = require('../23-12-2024/QueueWithArray');

let bst = new BinarySearchTree();



bst.insert(3);
bst.insert(1);
bst.insert(2);
bst.insert(4);
bst.insert(5);


function levelOrderTraversal(root) {
    if (!root) {
        console.log("Tree is empty.");
        return;
    }

    const queue = new Queue();
    queue.add(root);
    let level = 0;

    console.log("\nLevel Order Traversal:");
    while (!queue.isEmpty()) {
        const levelSize = queue.size(); // Number of nodes in the current level
        let levelOutput = `Level ${level}: `;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.poll();
            levelOutput += `${currentNode.data} `;

            if (currentNode.left) queue.add(currentNode.left);
            if (currentNode.right) queue.add(currentNode.right);
        }

        console.log(levelOutput.trim());
        level++;
    }
}

levelOrderTraversal(bst.root);