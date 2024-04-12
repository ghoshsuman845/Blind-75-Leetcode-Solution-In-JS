class MedianFinder {
    constructor() {
        this.lowerHalf = new MaxHeap();
        this.upperHalf = new MinHeap();
    }
    
    addNum(num) {
        if (this.lowerHalf.isEmpty() || num <= this.lowerHalf.peek()) {
            this.lowerHalf.push(num);
        } else {
            this.upperHalf.push(num);
        }
        
        // Rebalance the heaps if necessary
        if (this.lowerHalf.size() > this.upperHalf.size() + 1) {
            this.upperHalf.push(this.lowerHalf.pop());
        } else if (this.upperHalf.size() > this.lowerHalf.size()) {
            this.lowerHalf.push(this.upperHalf.pop());
        }
    }
    
    findMedian() {
        if (this.lowerHalf.size() === this.upperHalf.size()) {
            return (this.lowerHalf.peek() + this.upperHalf.peek()) / 2;
        } else {
            return this.lowerHalf.peek();
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    
    pop() {
        if (this.isEmpty()) return null;
        const maxElement = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return maxElement;
    }
    
    peek() {
        return this.isEmpty() ? null : this.heap[0];
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
            if (this.heap[currentIdx] > this.heap[parentIdx]) {
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
            let maxIdx = currentIdx;
            const leftChildIdx = currentIdx * 2 + 1;
            const rightChildIdx = currentIdx * 2 + 2;
            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] > this.heap[maxIdx]) {
                maxIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[maxIdx]) {
                maxIdx = rightChildIdx;
            }
            if (maxIdx !== currentIdx) {
                [this.heap[currentIdx], this.heap[maxIdx]] = [this.heap[maxIdx], this.heap[currentIdx]];
                currentIdx = maxIdx;
            } else {
                break;
            }
        }
    }
}

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
    
    peek() {
        return this.isEmpty() ? null : this.heap[0];
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
            if (this.heap[currentIdx] < this.heap[parentIdx]) {
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
            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] < this.heap[minIdx]) {
                minIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[minIdx]) {
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
