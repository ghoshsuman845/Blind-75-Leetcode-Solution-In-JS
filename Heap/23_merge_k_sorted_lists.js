/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;
    
    const heap = new MinHeap();
    
    // Push the head of each linked list to the heap
    for (let list of lists) {
        if (list) heap.push(list);
    }
    
    const dummyHead = new ListNode();
    let current = dummyHead;
    
    // Merge lists by popping the minimum node from the heap
    while (!heap.isEmpty()) {
        const minNode = heap.pop();
        current.next = minNode;
        current = current.next;
        if (minNode.next) heap.push(minNode.next);
    }
    
    return dummyHead.next;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(node) {
        this.heap.push(node);
        this.heapifyUp();
    }
    
    pop() {
        if (this.isEmpty()) return null;
        const minNode = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return minNode;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    heapifyUp() {
        let currentIdx = this.heap.length - 1;
        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.heap[currentIdx].val < this.heap[parentIdx].val) {
                [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
                currentIdx = parentIdx;
            } else {
                break;
            }
        }
    }
    
    heapifyDown() {
        let currentIdx = 0;
        while (currentIdx < this.heap.length) {
            let minIdx = currentIdx;
            const leftChildIdx = currentIdx * 2 + 1;
            const rightChildIdx = currentIdx * 2 + 2;
            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx].val < this.heap[minIdx].val) {
                minIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx].val < this.heap[minIdx].val) {
                minIdx = rightChildIdx;
            }
            if (minIdx !== currentIdx) {
                [this.heap[currentIdx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[currentIdx]];
                currentIdx = minIdx;
            } else {
                break;
            }
        }
    }
}
