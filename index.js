const add = function(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

const math = {
  add: add
};

module.exports = math;
