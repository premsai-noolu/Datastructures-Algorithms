//83. Remove Duplicates from Sorted List

var deleteDuplicates = function (head) {
  let curr = head;
  if (head == null) {
    return head;
  }
  while (curr.next) {
    if (curr.next.val == curr.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
