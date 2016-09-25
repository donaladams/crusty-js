import * as React from 'react'
import {Component} from 'react'
import {Recipe, RecipeStage, BakersPercentage, RecipeStep} from './recipe'
import {grams, formatNumber, calculateFinalMix, totalPercentagesInStage, totalGramsInStage} from './recipe'


const hideIfTrue = (value: boolean) => value ? "hidden" : ""


const CPercentageRow = (props: { row: BakersPercentage, flourWeight: number, hidePercentages: boolean }) => (
  <tr className="column">
    <td>{props.row.ingredient}</td>
    <td className={hideIfTrue(props.hidePercentages)}>{formatNumber(props.row.percentage) }</td>
    <td>{formatNumber(grams(props.flourWeight, props.row.percentage))}</td>
  </tr>
)


const CTotalRow = (props:{stage:RecipeStage, flourWeight:number, hidePercentages:boolean}) => (
  <tr className="column total-column">
    <td>Total</td>
    <td className={hideIfTrue(props.hidePercentages)}>
      {formatNumber(totalPercentagesInStage(props.stage)) }
    </td>
    <td>{formatNumber(totalGramsInStage(props.stage, props.flourWeight))}</td>
  </tr>
)


const CBakersPercentages = (props:{stage:RecipeStage, flourWeight:number, hidePercentages?:boolean}) => (
  <div className="bakers-percentages">
    <h2>{props.stage.stage}</h2>
    <table>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th className={hideIfTrue(props.hidePercentages)}>%</th>
          <th>g</th>
        </tr>
      </thead>
      <tbody>
        {props.stage.formula.map(bp => (
          <CPercentageRow
            key={bp.ingredient}
            row={bp}
            flourWeight={props.flourWeight}
            hidePercentages={props.hidePercentages} />)
        )}
        <CTotalRow
          stage={props.stage}
          flourWeight={props.flourWeight}
          hidePercentages={props.hidePercentages} />
      </tbody>
    </table>
  </div>
)


const CRecipeStep = (props: {step:RecipeStep}) => (
  <div className="recipe-step">
    <h2>
      <span className="recipe-step-number">{props.step.num}. </span>
      {props.step.title}
    </h2>
    <p>{props.step.text}</p>
  </div>
)

const CRecipeSteps = (props: {recipe: Recipe}) => (
  <div className="recipe-steps">
    <h2>Steps</h2>
    {props.recipe.steps.map(step => (
      <CRecipeStep key={step.num} step={step} />
    ))}
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

    var flourInPreferment = this.props.recipe.preferment ?
      this.props.recipe.preferment.percentageOfOverallFlour : 0;

    this.state = {
      totalFlourWeight: this.props.recipe.totalFlourWeight,
      prefermentFlourPercentage: flourInPreferment
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
    var preferment = this.props.recipe.preferment;
    var preferementHeader: JSX.Element;
    var prefermentPercentages: JSX.Element;
    var finalMix: JSX.Element;
    if(preferment) {
      preferementHeader = <p>Preferment Flour Percentage (%): {this.props.recipe.preferment.percentageOfOverallFlour}</p>;

      prefermentPercentages = <CBakersPercentages stage={this.props.recipe.preferment}
          flourWeight={grams(this.state.totalFlourWeight, this.state.prefermentFlourPercentage)} />

      finalMix = <CBakersPercentages stage={calculateFinalMix(this.props.recipe, this.state.prefermentFlourPercentage)}
          flourWeight={this.state.totalFlourWeight}
          hidePercentages={true} />
    }

    return (
      <div className="recipe">
        <h1>{this.props.recipe.name}</h1>
        <p> Ingredients: {this.props.recipe.ingredients.join(", ")}</p>
        <p>
          <label htmlFor="totalFlourWeight">Total Flour Weight (g):</label>
          <input id="totalFlourWeight" type="number"
                 defaultValue={this.props.recipe.totalFlourWeight}
                 onChange={this.onFlourWeightChange} />
        </p>
        {preferementHeader}
        <div className="bakers-percentages-collection">
          <CBakersPercentages stage={this.props.recipe.overall}
                              flourWeight={this.state.totalFlourWeight}/>
          {prefermentPercentages}
          {finalMix}
        </div>
      </div>
    );
  }
}

