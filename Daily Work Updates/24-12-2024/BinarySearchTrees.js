class TreeNode{
    constructor(data){
        this.right = null;
        this.left = null;
        this.data = data;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new TreeNode(data);
        if(!this.root) {
            this.root = newNode;
            return;
        }else{
            this.insertTreeNode(this.root, newNode);
        }
    }

    // Helper function to insert the node at the right postion in the tree.....
    insertTreeNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left == null){
                node.left = newNode;
            }
            else{
                this.insertTreeNode(node.left,newNode);
            }
        }
        else{
            if( node.right == null){
                node.right = newNode;
            } else{
                this.insertTreeNode(node.right, newNode);
            }
        }
    }


    remove(data){
        this.root = this.removeTreeNode(this.root, data);
    }

    // Helper function to remove the node form the BST.....
    removeTreeNode(node, key){
        if(node === null)
            return null;

        if( key < node.data){
            node.left = this.removeTreeNode(node.left, key);
            return node;
        } else if( key > node.data){
            node.right = this.removeTreeNode(node.right, key);
            return node;
        } else{
            //  In case of one node to be null... or one child is present....
            if( node.left == null){
                return node.right;
            }else if( node.right == null){
                return node.left;
            }

            // In case of no child present....
            let successor = this.findMinNode(node.right);
            node.data = successor.data;
            node.right =  this.removeTreeNode(node.right, successor.data);
            return node;
        }
    }

    // Find the minimum node in the tree..
    findMinNode(node){
        if( node.left == null){
            return node;
        }
        else{
            return this.findMinNode(node.left);
        }
    }

    // Traverse the tree in-order
    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.data);
            this.inorderTraversal(node.right);
        }
    }

    // Public method to call in-order traversal
    inorder() {
        this.inorderTraversal(this.root);
    }
    // Pre-order Traversal
    preorderTraversal(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    preorder() {
        console.log("Pre-order Traversal:");
        this.preorderTraversal(this.root);
    }

    // Post-order Traversal
    postorderTraversal(node) {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.data);
        }
    }

    postorder() {
        console.log("Post-order Traversal:");
        this.postorderTraversal(this.root);
    }
}

const bst = new BinarySearchTree();

bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);

console.log("In-order Traversal:");
bst.inorder();

console.log("\nPre-order Traversal:");
bst.preorder();

console.log("\nPost-order Traversal:");
bst.postorder();

// bst.remove(25);

// console.log("\nIn-order Traversal after removing 25:");
// bst.inorder();

// console.log("\nPre-order Traversal after removing 25:");
// bst.preorder();

// console.log("\nPost-order Traversal after removing 25:");
// bst.postorder();


module.exports = { TreeNode, BinarySearchTree };