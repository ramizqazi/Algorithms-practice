function merge_sort(list) {

  // stopping condition
  if (list.length <= 1) {
    return list
  }

  const { left_half, right_half } = split(list);
  const left = merge_sort(left_half);
  const right = merge_sort(right_half);

  return merge(left, right);
}

function split(list) {
  const mid = Math.trunc(list.length / 2);

  const left_half = list.slice(0, mid);
  const right_half = list.slice(mid);

  return { left_half, right_half };
}

function merge(left, right) {
  const l = [];
  let i = 0;
  let j = 0;

  while (i < left?.length && j < right?.length) {
    if (left[i] < right[j]) {
      l.push(left[i])
      i += 1
    } else {
      l.push(right[j])
      j += 1
    }
  }

  while (i < left?.length) {
    l.push(left[i])
    i += 1
  }

  while (j < right?.length) {
    l.push(right[j])
    j += 1
  }

  return l
}

const list = [4, 33, 3, 2, 6, 7, 1, 9, 10, 60];

console.log(merge_sort(list))