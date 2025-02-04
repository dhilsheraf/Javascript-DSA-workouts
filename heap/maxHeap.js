class MaxHeap {
    constructor(arr = []) {
        this.heap = [];
        if (arr.length > 0) {
            this.buildHeap(arr);
        }
    }

    getParentIndex(i) { 
        return Math.floor((i - 1) / 2); }

    getLeftChildIndex(i) {
         return 2 * i + 1; }
         
    getRightChildIndex(i) {
         return 2 * i + 2; }

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
        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

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
}

// Example Usage
const maxHeap = new MaxHeap([10, 5, 20, 30, 15]);
console.log("Max Heap:", maxHeap.heap);  // Output: Max Heap: [30, 15, 20, 5, 10]

maxHeap.insert(40);
console.log("After Inserting 40:", maxHeap.heap);  // Output: [40, 30, 20, 15, 10, 5]

console.log("Removed Max:", maxHeap.remove());  // Output: 40
console.log("After Removal:", maxHeap.heap);  // Output: [30, 15, 20, 5, 10]
