/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const map = new Map();
  for (const employee of employees) {
    map.set(employee.id, employee);
  }
  let total = 0;
  const queue = [];
  queue.push(id);
  while (queue.length) {
    const curId = queue.shift();
    const employee = map.get(curId);
    total += employee.importance;
    const subordinates = employee.subordinates;
    for (const subId of subordinates) {
      queue.push(subId);
    }
  }
  return total;
};