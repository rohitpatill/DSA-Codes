//remove and insert function in linkedlist code correction
function deleteNode(head, index) {
    // Return null if the list is empty
    if (!head) {
      return null;
    }
  
    // If the position is 0, delete the head of the list
    if (index === 0) {
      head = head.next;
      return head;
    }
  
    let previous = head;
    let current = head.next;
    let count = 1;
  
    // Find the node at the position before the node to be deleted
    while (current && count < index) {
      previous = current;
      current = current.next;
      count++;
    }
  
    // If the position is larger than the length of the list, do nothing
    if (!current) {
      return head;
    }
  
    // Delete the node at the desired position
    previous.next = current.next;
  
    return head;
  }
  