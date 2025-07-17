//206. Reverse Linked List

var reverseList = function (head) {
  if (head === null) return head;
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
