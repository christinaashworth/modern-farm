import { createPlan } from "/scripts/plan.js"
import { createCorn } from "/scripts/seeds/corn.js"
import { createSunflower } from "/scripts/seeds/sunflower.js"
import { createWheat } from "/scripts/seeds/wheat.js"
import { createAsparagus } from "/scripts/seeds/asparagus.js"
import { createSoybean } from "/scripts/seeds/soybean.js"
import { createPotato } from "/scripts/seeds/potato.js"
import { addPlant } from "/scripts/field.js"
import { usePlants } from "/scripts/field.js"

const yearlyPlan = createPlan()

console.log("Welcome to the main module")
console.log(yearlyPlan)



