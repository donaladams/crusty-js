

export interface BakersPercentage {
    ingredient: string;
    percentage: number;
}

export function grams(percent:number, totalFlour:number) {
    return percent / 100.0 * totalFlour;
}

export interface RecipeStage {
    stage: string;
    percentageOfOverallFlour: number;
    formula: BakersPercentage[];
}


export interface Recipe {
    name: string;
    ingredients: string[];
    totalFlourWeight: number;
    overall: RecipeStage;
    preferment?: RecipeStage;
}
