//160. Intersection of Two Linked Lists

var getIntersectionNode = function (headA, headB) {
  let seenNodes = new Set();
  while (headB) {
    seenNodes.add(headB);
    headB = headB.next;
  }
  while (headA) {
    if (seenNodes.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
};
