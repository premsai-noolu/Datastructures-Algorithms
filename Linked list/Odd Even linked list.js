//328. Odd Even Linked List

var oddEvenList = function (head) {
  if (head == null) return head;
  if (head.next == null) return head;
  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
};
