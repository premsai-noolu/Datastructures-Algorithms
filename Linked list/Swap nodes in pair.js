//24. Swap Nodes in Pairs

var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let c = head;
  let n = head.next;

  while (c && n) {
    prev.next = n;
    c.next = n.next;
    n.next = c;

    prev = c;
    c = prev.next;
    n = c && c.next;
  }
  return dummy.next;
};
