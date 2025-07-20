//2. Add Two Numbers

var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode();
  let temp = ans;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;

    l1 = l1 ? l1.next : 0;
    l2 = l2 ? l2.next : 0;
  }
  return temp.next;
};
