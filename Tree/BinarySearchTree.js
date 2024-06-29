class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // search the specific value

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // tree traverse  preorder DFS

  // in PreOrder it traverse root then  left subtree after that it goes to the right subtree

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

   // in InOrder it traverse  left subtree after that it comes to the root then goes to the right subtree

   inOrder(root) {
    if (root) {
     
      this.Inorder(root.left);
      console.log(root.value);
      this.Inorder(root.right);
    }
  }

  // in PostOrder it traverse  left subtree after that it comes to the right subtree  then goes to the root

  postOrder(root) {
    if (root) {
     
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
     
    }
  }
}


const bst = new BinaySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);



// console.log(bst.search(bst.root, 15));
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)

bst.postOrder(bst.root)