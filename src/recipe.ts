import * as _ from 'lodash';

export interface BakersPercentage {
  ingredient: string;
  percentage: number;
}

export interface RecipeStage {
  stage: string;
  percentageOfOverallFlour: number;
  formula: BakersPercentage[];
}

export interface RecipeStep {
  num: number;
  title: string;
  text: string;
  duration: number;
  type: string;
}

export interface Recipe {
  name: string;
  ingredients: string[];
  totalFlourWeight: number;
  overall: RecipeStage;
  preferment: RecipeStage;
  flours: string[];
  starters: string[];
  steps: RecipeStep[];
}

export function grams(totalFlour: number, percent: number): number {
  return percent / 100.0 * totalFlour;
}

export function formatNumber(value: number, precision:number = 2): string {
  if (Math.floor(value) == value) {
    return value.toFixed(0);
  } else {
    return value.toFixed(precision);
  }
}

export function totalPercentagesInStage(recipeStage:RecipeStage) {
  let overallPercentages:number[] = recipeStage.formula.map(function(bp:BakersPercentage) {
    return bp.percentage;
  });
  return _.sum(overallPercentages);
}

export function totalGramsInStage(recipeStage:RecipeStage, totalFlour:number) {
  let scale:number = totalPercentagesInStage(recipeStage) / 100;
  return totalFlour * scale;
}


export function calculateFinalMix(recipe:Recipe, prefermentFlourPercentage:number): RecipeStage {

  // Checks if the given BakersPercentage refers to the starter
  let isStarter = function(bakersPercentage:BakersPercentage): boolean {
    return !_.isEmpty(recipe.starters) && _.includes(recipe.starters, bakersPercentage.ingredient);
  };

  let prefermentToOverallPercentage = function(prefermentPercentage:BakersPercentage) {
    return (prefermentPercentage.percentage / 100) * prefermentFlourPercentage;
  };

  /*
  Combine Overall and Preferement entries for an
  ingredient to form the final mix for that ingredient.
  */
  let combine = function(ingredient:string): BakersPercentage {

    // lookup BakersPercentage by ingredient name in collection
    let find = function(collection:BakersPercentage[]): BakersPercentage {
      return _.find(collection, function(o: BakersPercentage) {
        return o.ingredient == ingredient;
      });
    };

    let toFinal = function(overallIngredient:BakersPercentage, prefermentIngredient:BakersPercentage): BakersPercentage {
      if(isStarter(overallIngredient)) {
        return null;
      } else if(prefermentIngredient == null) {
        return overallIngredient;
      } else {
        let totalPercentage = overallIngredient.percentage
        let overallPercentInPreferment = prefermentToOverallPercentage(prefermentIngredient);
        let finalMix = totalPercentage - overallPercentInPreferment;
        return {
          ingredient: overallIngredient.ingredient,
          percentage: finalMix
        }
      }
    }

    let overall = find(recipe.overall.formula);
    let preferment = find(recipe.preferment.formula);
    return toFinal(overall, preferment);
  }

  let prefermentPercentage:number = function() {
    let overallPercentages: number[] = recipe.preferment.formula.map(prefermentToOverallPercentage);
    return _.sum(overallPercentages);
  }();

  let percentages: BakersPercentage[] = _.compact(recipe.ingredients.map(combine));
  percentages.push({
    ingredient: recipe.preferment.stage,
    percentage: prefermentPercentage
  });

  let mix = {
    stage: 'Final Mix',
    percentageOfOverallFlour: 100,
    formula: _.filter(percentages, function(bp:BakersPercentage){
      return !isStarter(bp);
    })
  };

  return mix;
}
