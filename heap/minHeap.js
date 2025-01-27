class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Get parent index
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    // Get left child index
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    // Get right child index
    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    // Swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert a new value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Heapify up
    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index);
        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    // Remove and return the maximum value
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    // Heapify down
    heapifyDown(index) {
        let largest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    // Get the max value (root)
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

// Example Usage
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
maxHeap.insert(30);

console.log("Max:", maxHeap.peek()); // Max: 30
console.log("Extract Max:", maxHeap.extractMax()); // Extract Max: 30
console.log("After Extracting Max:", maxHeap.heap); // After: [20, 10, 15]
