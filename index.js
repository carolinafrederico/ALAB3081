// PART 1: MATH PROBLEMS
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
//Check if all numbers are divisible by 5. Cache the result in a variable
let result1 = n1/5
console.log(result1)
let result2 = n2/5
console.log(result2)
let result3 = n3/5
console.log(result3)
let result4 = n4/5
console.log(result4)
//Check if the first number is larger than the last. Cache the result in a variable.
console.log(n1 > n4);
// Accomplish the following arithmetic chain:
console.log(n2-n1)
console.log(5*n3)
console.log(100%n4);

//PART 2: PRACTICAL MATH
// How many gallons of fuel will you need for the entire trip?
const totalDistance = 1500;  // miles
const fuelCostPerGallon = 3; // dollars
const budget = 175;          // dollars
const speed1 = 55 // miles per hour
const speed2 = 60
const speed3 = 75

const gallonsNeeded1 = totalDistance / speed1;
console.log(gallonsNeeded1);

const gallonsNeeded2 = totalDistance / speed2;
console.log(gallonsNeeded2);

const gallonsNeeded3 = totalDistance / speed3;
console.log(speed3);

const totalCost1 = gallonsNeeded1 * fuelCostPerGallon;
console.log(totalCost1);

const totalCost2 = gallonsNeeded2 * fuelCostPerGallon;
console.log(totalCost2)


const timeNeeded1 = totalDistance / speed1;
console.log(timeNeeded1);

const timeNeeded2 = totalDistance / speed2;
console.log(timeNeeded2);

const timeNeeded3 = totalDistance / speed3;
console.log(timeNeeded3);

//Use literals

// Log the results using template literals
console.log(`Traveling at ${speed1} mph:`);
console.log(`  Gallons of fuel needed: ${gallonsNeeded1.toFixed(2)} gallons`);
console.log(`  Total fuel cost: $${totalCost1.toFixed(2)}`);
console.log(`  Time required: ${timeNeeded1.toFixed(2)} hours`);

// Check if the budget covers the total cost
if (totalCost1 <= budget) {
    console.log(`  Your budget of $${budget} is enough for this speed!`);
} else {
    console.log(`  Your budget of $${budget} is not enough for this speed.`);
}

