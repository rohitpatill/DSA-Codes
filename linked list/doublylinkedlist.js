//doubly linkedlist
class Node {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        if (!this.head) {
            this.head = new Node(data)
        } else {
            let node = new Node(data)
            this.head.previous = node
            node.next = this.head
            this.head = node
        }
        this.size++;
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data)
        } else {
            let node = new Node(data)
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.previous = current;


        }
        this.size++;
    }

    insertAtIndex(data, index) {
        if (index > this.size || index < 0) {
            return;
        }
        if (index === 0) {
            this.insertFirst(data)
            return;
        }
        let node = new Node (data)
        let previous, current

        current = this.head
        let count = 0;

        while (count < index) {
            previous = current
            count++;
            current = current.next;
        }

        node.next = current
        node.previous = previous
        previous.next = node
        current.previous = node


       // previous.next = current.previous =  new Node(data, current , previous)
   



        this.size++;
    }

    deletNode(index) {
        if (index > this.size || index < 0) {
            return;
        }

        let current = this.head
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previous = current;
                count++;
                current = current.next;
            }
            previous.next = current.next;
            current.previous = previous;
        }
        this.size--;
    }

    printReveresed() {
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        while (current) {
            console.log(current.data)
            current = current.previous

        }
    }

    getNode(index) {
        let current = this.head;
        let count = 0

        if (index === 0) {
            this.head = node;
        } else {
            while (current) {
                if (count === index) {
                    console.log(current.data)
                }
                count++;
                current = current.next;
            }
        }
    }

    display() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertFirst(400)
ll.insertFirst(800)
ll.insertAtIndex(12, 2)
//ll.printReveresed()
//ll.getNode(1)
//ll.deletNode(3)
ll.display()