const getName = (name) => {
  return `I'm ${name}`;
};

const getAge = (age) => {
  return `I'm ${age} years old.`;
};

exports.className = "Five";
const classRoll = 101;

// exports.getName = getName;
// exports.getAge = getAge;
// exports.className = className;

// module.exports = {
//   getName,
//   getAge,
//   className,
// };

module.exports = {
  name: getName,
  age: getAge,
  roll: classRoll,
};
