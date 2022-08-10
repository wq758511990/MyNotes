function solveEquation(equation: string): string {
  const replacedStr = equation.replace(/\-/g, "+-");
  const [eqLeft, eqRight] = replacedStr.split("=");
  const eqLeftArr = eqLeft.split("+");
  const eqRightArr = eqRight.split("+");
  let lx = 0,
    ln = 0;
  let rx = 0,
    rn = 0;
  for (let i = 0; i < eqLeftArr.length; i++) {
    const curStr = eqLeftArr[i];
    if (curStr.includes("x")) {
      const xIndex = curStr.lastIndexOf("x");
      let xNumber: string = curStr.slice(0, xIndex);
      if (xNumber === "") {
        xNumber = "1";
      }
      if (xNumber === "-") {
        xNumber = "-1";
      }
      lx += Number(xNumber);
    } else {
      ln += Number(curStr);
    }
  }
  for (let i = 0; i < eqRightArr.length; i++) {
    const curStr = eqRightArr[i];
    if (curStr.includes("x")) {
      const xIndex = curStr.lastIndexOf("x");
      let xNumber: string = curStr.slice(0, xIndex);
      if (xNumber === "") {
        xNumber = "1";
      }
      if (xNumber === "-") {
        xNumber = "-1";
      }
      rx += Number(xNumber);
    } else {
      rn += Number(curStr);
    }
  }
  const finXNum = lx - rx;
  const finNum = rn - ln;
  if (finXNum === 0 && finNum === 0) return "Infinite solutions";
  if (finXNum === 0) return "No solution";
  return `x=${finNum / finXNum}`;
}

console.log(solveEquation("1-x+x-x+x=1-x+x-x+x"));
