/* Part 1: Growing Pains*/ 
//1. Declare you global constansts here

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
const startingPlants = 20;
const maximumSpace = area / plantSpace;


/* math operators*/ 
//math.pow(2, weeks);
/* math operators*/

function predictGrowth(weeks) {
    let plantCount = startingPlants * Math.pow(2, weeks);

    if (plantCount > maximumSpace * plantSpace) {
        return `Week ${weeks}: Prune them (${plantCount} plants exceed 80% capacity)`;
    }
}



console.log(predictGrowth(3));