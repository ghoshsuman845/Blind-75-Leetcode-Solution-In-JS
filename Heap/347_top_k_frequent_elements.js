/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Step 1: Count the frequency of each element using a hashmap
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Step 2: Create a min heap to store the k most frequent elements
    const minHeap = new MinHeap();
    for (let [num, freq] of freqMap.entries()) {
        minHeap.push({ num, freq });
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    
    // Step 3: Extract the elements from the min heap
    const result = [];
    while (!minHeap.isEmpty()) {
        result.unshift(minHeap.pop().num);
    }
    
    return result;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    
    pop() {
        if (this.isEmpty()) return null;
        const minElement = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return minElement;
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    heapifyUp() {
        let currentIdx = this.heap.length - 1;
        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.heap[currentIdx].freq < this.heap[parentIdx].freq) {
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
            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx].freq < this.heap[minIdx].freq) {
                minIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx].freq < this.heap[minIdx].freq) {
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
