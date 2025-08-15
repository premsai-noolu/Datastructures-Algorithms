//160. Intersection of Two Linked Lists

var getIntersectionNode = function (headA, headB) {
  // Approach using Set
  // let seenNodes = new Set();
  // while(headB){
  //     seenNodes.add(headB)
  //     headB=headB.next
  // }
  // while(headA){
  //     if(seenNodes.has(headA)){
  //         return headA
  //     }
  //     headA=headA.next
  // }
  // return null

  //Second Approach
  let tempA = headA;
  let tempB = headB;
  let m = 0;
  while (headA) {
    headA = headA.next;
    m += 1;
  }

  let n = 0;
  while (headB) {
    headB = headB.next;
    n += 1;
  }

  if (m > n) {
    ans = m - n;
  } else {
    ans = n - m;
    let temp = tempA;
    tempA = tempB;
    tempB = temp;
  }
  for (let i = 0; i < ans; i++) {
    tempA = tempA.next;
  }
  while (tempA != tempB) {
    tempA = tempA.next;
    tempB = tempB.next;
  }
  return tempA;

  //Very good approach
  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};
