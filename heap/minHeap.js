class MinHeap {
    constructor(arr = []) {
        this.heap = [];
        if (arr.length > 0) {
            this.buildHeap(arr);
        }
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Build Heap from an array (O(N))
    buildHeap(arr) {
        this.heap = arr;
        for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index);
        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
}

// Example Usage
const minHeap = new MinHeap([10, 5, 20, 30, 15]);
console.log("Min Heap:", minHeap.heap);  // Output: Min Heap: [5, 10, 20, 30, 15]

minHeap.insert(3);
console.log("After Inserting 3:", minHeap.heap);  // Output: [3, 5, 20, 30, 15, 10]

console.log("Removed Min:", minHeap.remove());  // Output: 3
console.log("After Removal:", minHeap.heap);  // Output: [5, 10, 20, 30, 15]
