/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let hours = 0;
  const energySum = energy.reduce((a, b) => a + b, 0);
  if (energySum >= initialEnergy) {
    hours += energySum - initialEnergy + 1;
  }
  while (experience.length) {
    if (initialExperience > experience[0]) {
      initialExperience += experience[0];
      experience.shift();
    } else {
      const disExperience = experience[0] - initialExperience + 1;
      initialExperience += disExperience;
      hours += disExperience;
    }
  }
  return hours;
};

console.log(minNumberOfHours(5, 3, [1, 4], [2, 5]));
