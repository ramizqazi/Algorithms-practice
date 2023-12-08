function BinarySearch(list, num, itration = 1) {
  let arr = list;

  if(itration === 1) {
    arr = list.sort((a, b) => a - b)
  }

  if (arr.length === 0) {
    return false;
  }

  let mid = Math.trunc(arr.length / 2);

  if (arr[mid] === num) {
    return true; // Return the index, not the value
  }

  if (arr[mid] < num) {
    return BinarySearch(arr.slice(mid + 1), num);
  } else {
    return BinarySearch(arr.slice(0, mid), num);
  }
}

const list = [4, 3, 2, 6, 7, 1, 9, 10, 33, 60];

console.log(BinarySearch(list, 11));
