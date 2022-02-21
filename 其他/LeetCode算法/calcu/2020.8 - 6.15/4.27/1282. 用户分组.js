/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  // let dict = {}
  // let res = []
  // for (let key in groupSizes) {
  //   let val = groupSizes[key]
  //   if (!dict[val]) {
  //     dict[val] = []
  //   }
  //   dict[val].push(key)
  //   if (dict[val].length === val) {
  //     res.push(dict[val])
  //     dict[val] = []
  //   }
  // }
  // return res
  let dict = {}
  let res = []
  for (let key in groupSizes) {
    let val = groupSizes[key]
    if (!dict[val]) {
      dict[val] = []
    }
    dict[val].push(key)
  }

  for (let key in dict) {
    let tmp = []
    while (dict[key].length) {
      tmp.push(dict[key].pop())
      if (tmp.length == key) {
        res.push(tmp)
        tmp = []
      }
    }
  }

  return res
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]))