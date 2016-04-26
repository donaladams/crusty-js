import * as React from 'react'
import {Component} from 'react'
import {Recipe, RecipeStage, BakersPercentage, grams} from './recipe'


const CPercentageRow = (props:{row: BakersPercentage, flourWeight: number}) => (
     <tr className="column">
         <td>{props.row.ingredient}</td>
         <td>{props.row.percentage}</td>
         <td>{grams(props.row.percentage, props.flourWeight)}</td>
    </tr>
)


const CBakersPercentages = (props:{stage:RecipeStage, flourWeight:number}) => (
    <div className="bakers-percentages">
        <h2>{props.stage.stage}</h>
        <table>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>%</th>
                    <th>g</th>
                </tr>
            </thead>
            <tbody>
            {props.stage.formula.map(bp => (
                <CPercentageRow
                    key={bp.ingredient}
                    row={bp}
                    flourWeight={grams(props.stage.percentageOfOverallFlour, props.flourWeight)} />)
            )}
            </tbody>
        </table>

    </div>
)


export var CRecipe = (props:{recipe: Recipe}) => (
    <div className="recipe">
        <h1>{props.recipe.name}</h1>
        <p> Ingredients: {props.recipe.ingredients.join(", ")}</p>
        <CBakersPercentages stage={props.recipe.overall} flourWeight={props.recipe.totalFlourWeight}/>
        <CBakersPercentages stage={props.recipe.preferment}
                            flourWeight={
                                grams(props.recipe.totalFlourWeight, props.recipe.preferment.percentageOfOverallFlour)
                            }
                            />
    </div>
)
