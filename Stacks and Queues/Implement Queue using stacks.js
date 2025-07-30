//232. Implement Queue using Stacks

var MyQueue = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.q2.length !== 0) {
    return this.q2.pop();
  }
  let n = this.q1.length;
  for (let i = 0; i < n; i++) {
    this.q2.push(this.q1.pop());
  }
  return this.q2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.q2.length !== 0) {
    return this.q2[this.q2.length - 1];
  }
  let n = this.q1.length;
  for (let i = 0; i < n; i++) {
    this.q2.push(this.q1.pop());
  }
  return this.q2[this.q2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.q1.length === 0 && this.q2.length === 0) {
    return true;
  } else {
    return false;
  }
};
