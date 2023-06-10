class Node{
    constructor ( data,  next = null, previous = null ){
    this.data = data;
    this.previous = previous;
    this.next = next;
    
  }
}
  
  
  class LinkedList{
    constructor(){
      this.head = null;
      this.size =0;
      
    }
    
    insertFirst( data)
    {
      if ( ! this.head){
      this.head = new Node ( data, this.head);
    }
    else{
      let node = new Node( data)
      this.head.previous = node;
      node.next = this.head
      this.head = node;

    }
    
    this.size++;
    }
    insertLast(data){
        let node = new Node ( data)
        if ( ! this.head){
            this.head = new Node ( data, this.head);
          }else{
            let current = this.head;
            while( current.next){
                current = current.next;
            }
            current.next = node;
            node.previous = current;

         

          }
          this.size++;
    }

    insterAtIndex( data , index){
        if ( index < 0 || index > this.size){
            return;
        }if ( index === 0 ){
            this.insertFirst( data)
        }

        let node = new Node( data)
        let previous , current;
        
        current = this.head
        let count = 0;

        while( count < index){
            previous = current;
            count++;
            current = current.next
        }

        previous.next = node;
        node.next = current;
        current.previous=node
        node.previous = previous;

        this.size++;
    }

    deletAtIndex( index){
        if ( index < 0 || index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count;

        if ( index === 0 ){
           this.head = current.next
        }else{
            while( count<index){
                previous = current;
                count++;
                current = current.next;
            }
           previous.next = current.next;
           current.next.previous = previous;
        
              this.size--;

    }
  }

    printReveresed(){
        let current = this.head;

        while( current.next){
        current = current.next
        }
        while( current){
            console.log(current.data)
            current = current.previous
        }
    }


    display() {
      let current = this.head;
      
      while( current){
        console.log(current.data);
        current = current.next
      }
    }

  
}
  const ll = new LinkedList();
  ll.insertFirst( 100);
  ll.insertFirst( 200);
  ll.insertFirst( 300);
  ll.insertFirst( 400);
  ll.insertFirst( 500);
  ll.insertLast( 600);
  ll.insterAtIndex( 90 , 1)
  ll.deletAtIndex(1)

 //ll.printReveresed();
  ll.display();


 