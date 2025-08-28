class Minheap {
  constructor() {
    this.heap = [5, 10, 20, 30];
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insertVal(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapify(lastIndex);
  }
  heapify(i) {
    while (i > 0) {
      let ParentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[ParentIndex]) {
        [this.heap[i], this.heap[ParentIndex]] = [
          this.heap[ParentIndex],
          this.heap[i],
        ];
        i = ParentIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new Minheap();
heap.insertVal(0);

console.log(heap.heap);
