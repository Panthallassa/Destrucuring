console.log(numPlanets); // 8
console.log(yearNeptunediscovered); // 1846

console.log(dicoveryYears); // yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

getUserData({
	firstName: "Alejandro",
	favoriteColor: "purple",
});
// Your name is Alejandro, and you like purple
getUserData({ firstName: "Melissa" });
// Your name is Melissa and you like green
getUserData({});
// Your name is undefined and you like green

console.log(first); // 'Maya'
console.log(second); // 'Marisa'
console.log(third); // 'Chi'

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings);
// "Bright copper kettles",
//"warm woolen mittens",
//"Brown paper packages tied up with strings"

console.log(numbers); // [10, 30, 20]
const obj = {
	numbers: {
		a: 1,
		b: 2,
	},
};
const {
	numbers: { a, b },
} = obj;

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => ({
	first,
	second,
	third,
	rest,
});
