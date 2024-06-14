// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert data into head

  insertFirst(data) {
    this.head = new Node(data);
    this.size++;
  }

  //   insert datainto tail

  insertLast(data) {
    let node = new Node(data);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //   insert any value in  the given index

  insertAt(data, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // get the value of a given index

  getIndexValue(index) {
    let current = this.head;
    let count = 0;
    while (count === index) {
      console.log(current.data);
    }
    count++;
    current = current.next;
  }

  // remove the value at given index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let count = 0;
    let previous;

    // remove the first data from head
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // merge 2 linked list

  mergeList(list) {
    let current = this.head;

    if (!current) {
      this.head = list.head;
      return;
    }
    while (current.next) {
      current = current.next;
    }
    // current list link to new list head
    current.next = list.head;
    this.size += list.size;
  }

  // remove duplicate element both list

  removeDuplicate() {
    let current = this.head;
    let runner;

    

    while (current & current.next) {
      runner = current;
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
        this.sixe--;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }

  // print the linkedList

  printList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

// second object for creating another linked list
const ll1 = new LinkedList();

// third object for creating another linked list

const ll3=new LinkedList();


ll.insertFirst(100);

ll.insertLast(200);

ll.insertAt(500, 1);

ll.getIndexValue(1);

ll.removeAt(1);

console.log("List1:");
ll.printList();

// insert value into linked list
ll1.insertFirst(90000);
ll1.insertAt(10000, 1);
ll1.insertLast(50000);

ll.mergeList(ll1);

console.log("List2:");
ll1.printList();


// insert value into linked list
ll3.insertFirst(100);
ll3.insertAt(100, 1);
ll3.insertLast(500);

console.log("List3:");
ll3.printList();

// Print merged list
console.log("Merged List:");
ll.printList();

// console.log("remove duplicate:");
// ll3.removeDuplicate()
// ll3.printList();