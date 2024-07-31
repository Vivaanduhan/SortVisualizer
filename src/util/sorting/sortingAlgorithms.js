export const bubbleSort = (arr, setTimerState, setArray) => {
  let n = arr.length;
  let swapped = false;
  let temp = 0;
  let i = 0;
  let j = 0;
  let timer = setInterval(() => {
    if (i < n) {
      if (j < n - i - 1) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
        j++;
      } else {
        if (!swapped) {
          clearInterval(timer);
          setTimerState(false);
        }
        i++;
        j = 0;
        swapped = false;
      }
      setArray([...arr]);
    } else {
      clearInterval(timer);
      setTimerState(false);
    }
  }, 20);
};
export const selectionSort = (arr, setTimerState, setArray) => {
  let n = arr.length;
  let i = 0;
  let j = 0;
  let minIndex = 0;
  let temp = 0;
  let timer = setInterval(() => {
    if (i < n) {
      minIndex = i;
      j = i + 1;
      while (j < n) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        j++;
      }
      if (minIndex !== i) {
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
      i++;
      setArray([...arr]);
    } else {
      clearInterval(timer);
      setTimerState(false);
    }
  }, 20);
};
export const insertionSort = (arr, setTimerState, setArray) => {
  let n = arr.length;
  let i = 1;
  let j = 0;
  let key = 0;
  let timer = setInterval(() => {
    if (i < n) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
      i++;
      setArray([...arr]);
    } else {
      clearInterval(timer);
      setTimerState(false);
    }
  }, 20);
};
// src/util/sorting/sortingAlgorithms.js

export const mergeSort = (array) => {
  // Implementation of merge sort
};

export const quickSort = (array) => {
  // Implementation of quick sort
};

export const heapSort = (array) => {
  // Implementation of heap sort
};
