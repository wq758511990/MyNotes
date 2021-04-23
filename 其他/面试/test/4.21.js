function myFlat (arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}

const arr = [1, [2, [3]]]

const res = myFlat(arr)

