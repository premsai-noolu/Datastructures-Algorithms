//19. Remove Nth Node From End of List

// Approach 1 (Two Pass)
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  let prevPosition = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
};

// Approach 2 (One pass)

var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let first = sentinel;
  let second = sentinel;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  second.next = second.next.next;
  return sentinel.next;
};
