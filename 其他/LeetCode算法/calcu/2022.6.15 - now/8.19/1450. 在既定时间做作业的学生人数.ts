function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  let ans = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) ans++;
  }
  return ans;
}

console.log(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5
  )
);
