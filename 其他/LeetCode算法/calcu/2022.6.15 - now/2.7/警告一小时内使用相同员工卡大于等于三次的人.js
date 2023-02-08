/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  if (keyTime.length < 3) return [];
  const map = {};
  let ans = new Set();

  for (let key in keyName) {
    const name = keyName[key];
    if (map[name]) {
      map[name].push(keyTime[key]);
    } else {
      map[name] = [keyTime[key]];
    }
  }

  for (const [key, value] of Object.entries(map)) {
    if (value.length >= 3) {
      const sortedValue = value.sort();
      let l = 0,
        r = 2;
      while (r < sortedValue.length) {
        if (calIsInOneHour(l, r, sortedValue)) {
          ans.add(key);
        }
        l++;
        r++;
      }
    }
  }

  function calIsInOneHour(l, r, keyTime) {
    const lArr = keyTime[l].split(":");
    const rArr = keyTime[r].split(":");
    const mArr = keyTime[l + 1].split(":");
    const lHour = lArr[0];
    const lMinute = lArr[1];
    const rHour = rArr[0];
    const rMinute = rArr[1];
    const mHour = mArr[0];
    let hourDist = rHour - lHour;
    if (hourDist < 0 || hourDist > 1) return false;
    if (hourDist === 1) {
      return lMinute >= rMinute && (mHour === lHour || mHour === rHour);
    }
    if (hourDist === 0) {
      return lHour === mHour && mHour === rHour;
    }
  }
  const result = [...ans].sort();
  return result;
};

console.log(
  alertNames(
    ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"],
    ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"]
  )
);
