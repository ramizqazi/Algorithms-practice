function BinarySearch(list, num, itration = 1) {
  let arr = list;
  let first = 0;
  let last = arr.length - 1;

  if (itration === 1) {
    arr = list.sort((a, b) => a - b)
  }

  while (first <= last) {
    let mid = Math.trunc((first + last) / 2);

    if (arr[mid] === num) {
      return mid; // Return the index, not the value
    }

    if (arr[mid] < num) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return  -1;
}

const list = [4, 3, 2, 6, 7, 1, 9, 10, 33, 60];

console.log(BinarySearch(list, 9));
