function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === element) {
        return mid;
      } else if (arr[mid] < element) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
  
  const arr = [11, 22, 33, 44, 55, 66];
  const element = 44;
  console.log(binarySearch(arr, element)); // Output: 3
  