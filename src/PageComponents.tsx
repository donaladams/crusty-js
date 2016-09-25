import * as React from 'react'
import {Component, SyntheticEvent} from 'react'
import {Recipe} from './recipe'
import {CRecipe} from './RecipeComponents'
import {grams, formatNumber, calculateFinalMix, totalPercentagesInStage, totalGramsInStage} from './recipe'
import * as _ from 'lodash';


export class CRecipePage extends React.Component<{recipes: Recipe[]}, {activeRecipe: Recipe}> {
  constructor(props:{recipes: Recipe[]}) {
    super(props);
    this.state = {
      activeRecipe: this.props.recipes[0]
    }
    this.changeActiveRecipe = this.changeActiveRecipe.bind(this);
  }
  changeActiveRecipe(recipe: Recipe, event:SyntheticEvent) {
    console.log(recipe)
    this.setState({activeRecipe: recipe})
  }
  render() {
    return (
      <div className="recipe-page">
        <div className="recipe-chooser">
          <h2>Recipes</h2>
          <ul className="recipe-list">
            {this.props.recipes.map((r:Recipe) => 
              (<li key={r.name} data-name={r.name} onClick={this.changeActiveRecipe.bind(null, r)}>{r.name}</li>))}
          </ul>
        </div>
        <div className="recipe-panel">
          <div className="active-recipe">
            <CRecipe recipe={this.state.activeRecipe} />
          </div>
        </div>
      </div>
    )
  }
}
