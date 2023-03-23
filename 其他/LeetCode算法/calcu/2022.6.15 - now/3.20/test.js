// 用react 实现一个input组件能将输入包含 逗号(半角,全角)、空格、 换行符分隔的字符串转换为数组进行onChange输出， 输入框内展示为以半角逗号分隔的字符串。
// 请考虑用户体验， 不能影响用户输入

// const MyInput = () => {
//   const [value, setValue] = useState("");
//   const [transformdArr, setTransformedArr] = useState([]);
//   const handleChange = (e) => {
//     let resultStr = "";
//     const value = e.target.value;
//     const replaceStr1 = value.replaceAll(",", " ");
//     const replaceStr2 = replaceStr1.replaceAll("\n", " ");
//     const replaceStr3 = replaceStr2.replaceAll("，", " ");
//     for (let i = 0; i < replaceStr3.length; i++) {
//       if (
//         i > 0 &&
//         replaceStr3[i] === " " &&
//         replaceStr3[i] === replaceStr3[i - 1]
//       ) {
//         continue;
//       }
//       resultStr += replaceStr3[i];
//     }
//     resultStr = resultStr.trim();
//     const transformdArr = resultStr.split(" ");
//     console.log(transformdArr);
//     setTransformedArr(transformdArr);
//     setValue(e.target.value);
//   };

//   const handleBlur = () => {
//     setValue(transformdArr.join(","));
//   };

//   return <input onBlur={handleBlur} onChange={handleChange} value={value} />;
// };

// 假设本地机器无法做加减乘除法，需要通过远程请求让服务端来实现。 (即不允许使用 + 号)
// 以加法为例，现有远程API的模拟实现 ——
// const addRemote = async (a, b) => new Promise((resolve) => {
//   setTimeout(() => resolve(a + b), 1000)
// })。
// 请实现本地的add方法，调用addRemote，能最优的实现输入数字的加法func 。
// 请用示例验证运行结果 —— add(1, 2) = 3; add(1, 3, 5, 2) = 11

const addRemote = async (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
  });
// ------------------ 请在以下区域作答--------------------

async function add() {
  const args = Array.from(arguments);
  const length = args.length;
  if (length === 0) return 0;
  if (length <= 2) {
    let a = arguments[0];
    let b = arguments[1] ?? 0;
    const res = await addRemote(a, b);
    console.log('res', res)
    return res;
  }

  const mid = Math.floor(length / 2);

  const leftP = add(...args.slice(0, mid));
  const rightP = add(...args.slice(mid, length));
  let leftValue = await leftP;
  let rightValue = await rightP;
  const result = await addRemote(leftValue, rightValue);
  console.log('result', result)
  return result;
}

(async function () {
  const res = await add(1, 3, 5, 2, 5, 3, 0, 9, 11);
  //   console.log("res", res);
})();
