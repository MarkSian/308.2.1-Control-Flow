/* Part 1: Growing Pains*/ 
//1. Declare you global constansts here

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
const startingPlants = 20;
const maximumSpace = area / plantSpace;

//math.pow(2, weeks);


function predictGrowth(weeks) {
    let plantCount = startingPlants * Math.pow(2, weeks);

    if (plantCount > maximumSpace * plantSpace) {
        return `Week ${weeks}: Prune them (${plantCount} plants exceed 80% capacity)`;
    } else if (plantCount >= maximumSpace * 0.5) {
        return `Week ${weeks}: Monitor them (${plantCount} plants are between 50% and 80% capacity)`;
    } else {
        return `Week ${weeks}: Planted (${plantCount} plants are below 50% capacity)`;
    }
}

console.log(predictGrowth(3)); 
console.log(predictGrowth(2));
console.log(predictGrowth(1.5));
console.log(predictGrowth(1));

/* log results*/
// Week 3: Prune them (160 plants exceed 80% capacity)
// Week 2: Prune them (80 plants exceed 80% capacity)
// Week 1.5: Monitor them (56.5685424949238 plants are between 50% and 80% capacity)
// Week 1: Planted (40 plants are below 50% capacity)

/* Part 1: Growing Pains*/ 


/* Part 2:Thinking Bigger*/ 
// Question: Given that we start with 100 plants and did not prune them for 10 weeks, what is the radius of the garden?
// area = pi * r^2 refactor this to solve for r. r = radius
// r = sqrt(area/pi) *use Math.sqrt()
// unknowns: current plant count, new plant space
//*We can still use our global constants from Part 1 as they are accessible


// Constants for Part 2
const initialPlants = 100; // Starting with 100 plants instead of 20
const weeksGrowth = 10; // 10 weeks of additional growth

// Calculate the number of plants after 10 weeks of additional growth
const plantCountGrowth = initialPlants * Math.pow(2, weeksGrowth);

// Calculate the space required for the plants
const calculateSpace = plantCountGrowth * plantSpace;

// Calculate the radius of the garden given the new starting requirements
const calculateRadius = Math.sqrt(calculateSpace / PI);

console.log(`The radius of the garden is ${calculateRadius} meters`);

/* log results*/
// The radius of the garden is 161.48286269784148 meters squared

