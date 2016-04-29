import * as React from 'react'
import {Component} from 'react'
import {Recipe, RecipeStage, BakersPercentage} from './recipe'
import {grams, formatNumber, calculateFinalMix, totalPercentagesInStage, totalGramsInStage} from './recipe'


const CPercentageRow = (props:{row:BakersPercentage, flourWeight: number}) => (
  <tr className="column">
    <td>{props.row.ingredient}</td>
    <td>{formatNumber(props.row.percentage)}</td>
    <td>{formatNumber(grams(props.flourWeight, props.row.percentage))}</td>
  </tr>
)


const CTotalRow = (props:{stage:RecipeStage, flourWeight:number}) => (
  <tr className="column total-column">
    <td>Total  </td>
    <td>{formatNumber(totalPercentagesInStage(props.stage))}</td>
    <td>{formatNumber(totalGramsInStage(props.stage, props.flourWeight))}</td>
  </tr>
)


const CBakersPercentages = (props:{stage:RecipeStage, flourWeight:number}) => (
  <div className="bakers-percentages">
    <h2>{props.stage.stage}</h2>
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
          flourWeight={props.flourWeight} />)
        )}
        <CTotalRow stage={props.stage} flourWeight={props.flourWeight} />
      </tbody>
    </table>
  </div>
)


interface RecipeProps {
  recipe:Recipe;
}


interface RecipeState {
  totalFlourWeight:number;
  prefermentFlourPercentage:number;
}


export class CRecipe extends React.Component<RecipeProps, RecipeState> {
  constructor(props:RecipeProps) {
    super(props);
    this.state = {
      totalFlourWeight: this.props.recipe.totalFlourWeight,
      prefermentFlourPercentage: this.props.recipe.preferment.percentageOfOverallFlour
    };
    this.onFlourWeightChange = this.onFlourWeightChange.bind(this);
    this.onPrefermentFlourPercentageChange = this.onPrefermentFlourPercentageChange.bind(this);

  }
  onFlourWeightChange(event) {
    this.setState({
      totalFlourWeight: event.target.valueAsNumber,
      prefermentFlourPercentage: this.state.prefermentFlourPercentage
    });
  }
  onPrefermentFlourPercentageChange(event) {
    this.setState({
      totalFlourWeight: this.state.totalFlourWeight,
      prefermentFlourPercentage: event.target.valueAsNumber
    });
  }
  render() {
    return (
      <div className="recipe">
        <h1>{this.props.recipe.name}</h1>
        <p> Ingredients: {this.props.recipe.ingredients.join(", ")}</p>
        <p>
          <label for="totalFlourWeight">Total Flour Weight (g):</label>
          <input id="totalFlourWeight" type="number"
                 defaultValue={this.props.recipe.totalFlourWeight}
                 onChange={this.onFlourWeightChange} />
        </p>
        <p>Preferment Flour Percentage (%): {this.props.recipe.preferment.percentageOfOverallFlour}</p>
        <CBakersPercentages stage={this.props.recipe.overall}
                            flourWeight={this.state.totalFlourWeight}/>

        <CBakersPercentages stage={this.props.recipe.preferment}
          flourWeight={grams(this.state.totalFlourWeight, this.state.prefermentFlourPercentage)}
        />
        <CBakersPercentages stage={calculateFinalMix(this.props.recipe, this.state.prefermentFlourPercentage)}
                            flourWeight={this.state.totalFlourWeight}/>
      </div>
    );
  }
}
