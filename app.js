//has odd number
function hasOddNumber(array) {
  return array.some((number) => number % 2 === 0);
}
console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4]));

//has a zero
function hasAZero(num) {
  const arr = String(num).split("");
  console.log(arr);
  return arr.some((num) => +num === 0);
}
console.log(hasAZero([33321232131012]));

//has only odd numbers
function hasOnlyOddNumbers(array) {
  return array.every((num) => num % 2 !== 0);
}
console.log(hasOnlyOddNumbers([1, 3, 5, 7]));

//has no duplicates
function hasNoDuplicates(array) {
  return array.some((num, index) => {
    return array.indexOf(num) !== index;
  });
}
console.log(hasNoDuplicates([1, 2, 3, 1]));

//has certain key
function hasCertainKey(array, key) {
  return array.every((obj) => obj[key]);
}
console.log(
  hasCertainKey(
    [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
      { title: "Instructor", first: "Matt", last: "Lane" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "first"
  )
);

//has a Certain Value
function hasCertainValue(array, key, value) {
  return array.every((obj) => obj[key] === value);
}
``;
console.log(
  hasCertainValue(
    [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
      { title: "Instructor", first: "Matt", last: "Lane" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "first",
    "Elie"
  )
);
