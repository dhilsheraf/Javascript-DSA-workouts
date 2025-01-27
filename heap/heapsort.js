function heapify(arr, n, i) {
    let largest = i;       // Root node
    let left = 2 * i + 1;  // Left child index
    let right = 2 * i + 2; // Right child index

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than the current largest
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If the largest is not the root, swap and heapify
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        heapify(arr, n, largest); // Recursively heapify
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Step 1: Build a max-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

// Example Usage
const arr = [4, 10, 3, 5, 1];
console.log("Original array:", arr);

const sortedArr = heapSort(arr);
console.log("Sorted array:", sortedArr);
