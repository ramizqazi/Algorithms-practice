class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  add(data) {
    let new_node = new Node(data);
    new_node.next  = this.head;

    this.head = new_node;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  getFirst() {
    return this.head;
  }
}


let list = new LinkedList()

list.add('hello world'); 
list.add('hello world 2'); 
console.log(list.getLast()) 