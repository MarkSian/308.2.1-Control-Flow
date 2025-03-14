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

    if (plantCount > maximumSpace * 0.8) {
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