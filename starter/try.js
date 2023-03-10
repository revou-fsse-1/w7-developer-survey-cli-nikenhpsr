function findIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 2));
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([1, 2, 3, 4, 5], 3));

function less(a, b) {
  if (a < b || a == b) {
    return a;
  } else {
    return b;
  }
}

console.log(less(1, 4));
console.log(less(3, 2));
console.log(less(3, 3));
