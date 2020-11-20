let plantTypes = []

export const addPlant = (seed) => {
  if (seed.type !== "corn") {
    plantTypes.push(seed);
  } else {
      for (const ear of seed) {
        plantTypes.push(ear)
    }
  }
  
}

export const usePlants = () => {
  return plantTypes.slice();
}