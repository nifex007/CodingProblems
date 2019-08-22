function compute(proportions, availableIngredients){
    let remainingIngredients = [];
    const leastIngredient = Math.min(...availableIngredients);
    const leastIngredient_index = availableIngredients.indexOf(leastIngredient);
    const gram_for_a_portion = availableIngredients[leastIngredient_index]/proportions[leastIngredient_index];
    for (let i=0; i<proportions.length; i++){
        remainderIngredient = availableIngredients[i] - (gram_for_a_portion * proportions[i]);
        remainingIngredients.push(remainderIngredient)
    }

    return remainingIngredients;
}

console.log(compute([1, 3, 2], [25, 18, 72]));
console.log(compute([1, 2, 3], [25, 18, 72]));
console.log(compute([1, 6, 2], [25, 72, 18]));