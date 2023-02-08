/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  //   const dict = {};
  //   folder.sort((a, b) => a.length - b.length);
  //   for (let path of folder) {
  //     const pathArr = path.split("/");

  //     let isInDict = false;
  //     let i = 1;
  //   }

  //   function searchDict(i, obj, arr) {
  //     if (i === arr.length - 1) {
  //       return true;
  //     }

  //     return obj[arr[i]];
  //   }

  // 此处排序，确保同一前缀的位置彼此相邻
  folder.sort();

  const ans = [folder[0]];
  // ++i
  for (let i = 1; i < folder.length; i++) {
    // 记录上一个路径的长度
    const pre = ans[ans.length - 1].length;
    if (
      !(
        pre < folder[i].length &&
        ans[ans.length - 1] === folder[i].slice(0, pre) &&
        folder[i][pre] === "/"
      )
    ) {
      ans.push(folder[i]);
    }
  }
  return ans;
};

console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));
