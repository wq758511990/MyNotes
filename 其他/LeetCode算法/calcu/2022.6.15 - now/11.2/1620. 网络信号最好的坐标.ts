function bestCoordinate(towers: number[][], radius: number): number[] {
  let xMax = 0;
  let yMax = 0;
  let maxPos = [0, 0];
  let maxRadius = 0;
  for (const tower of towers) {
    xMax = Math.max(tower[0], xMax);
    yMax = Math.max(tower[1], yMax);
  }
  for (let x = 0; x <= xMax; x++) {
    for (let y = 0; y <= yMax; y++) {
      const curPos = [x, y];
      let sumRadius = 0;
      for (const tower of towers) {
        const tarPos = [tower[0], tower[1]];
        const distanceDb = getDistance(curPos, tarPos);
        const distance = Math.sqrt(distanceDb);
        if (distance <= radius) {
          sumRadius += Math.floor(tower[2] / (1 + distance));
        }
      }
      if (sumRadius > maxRadius) {
        maxPos = curPos;
        maxRadius = sumRadius;
      }
    }
  }
  return maxPos;
}

const getDistance = (curPos: any, targetPos: any) => {
  return (curPos[0] - targetPos[0]) ** 2 + (curPos[1] - targetPos[1]) ** 2;
};

console.log(
  bestCoordinate(
    [
      [30, 34, 31],
      [10, 44, 24],
      [14, 28, 23],
      [50, 38, 1],
      [40, 13, 6],
      [16, 27, 9],
      [2, 22, 23],
      [1, 6, 41],
      [34, 22, 40],
      [40, 10, 11],
    ],
    20
  )
);
