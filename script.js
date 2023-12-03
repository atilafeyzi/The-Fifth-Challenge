// Challenge
// 1. create an array
// 2. add your favorite sports
// 3. use this list in a text
// 4. remove the last item from the list
// 5. create a new array for the first two items then replace it in main array

const sports = [];
sports.push("Cycling", "Swim", "Rock Climbing", "Mountaineering", "Diving");
const stringSports = sports.join(", ");
const text = `My favorite sports are ${stringSports}`;
const lastIndex = sports.length - 1;
sports.splice(lastIndex);
const firstTwoSports = sports.slice(0, 2);
sports.splice(0, 2, firstTwoSports)

console.log(sports);
console.log(stringSports);
console.log(text);
console.log(lastIndex);
console.log(firstTwoSports);
