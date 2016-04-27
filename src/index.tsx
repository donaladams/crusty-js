import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {CRecipe} from "./App"

var vermontSourdough = {
  name: "Vermont Sourdough",
  ingredients: [
  "Bread flour",
  "Rye flour",
  "Water",
  "Salt",
  "Starter"
  ],
  totalFlourWeight: 1000,
  overall: {
    stage: "Overall",
    percentageOfOverallFlour: 100.0,
    formula: [{
      "ingredient": "Bread flour",
      "percentage": 90.0
    }, {
      "ingredient": "Rye flour",
      "percentage": 10.0
    }, {
      "ingredient": "Water",
      "percentage": 65.0
    }, {
      "ingredient": "Salt",
      "percentage": 2.0
    }
    ]
  },
  preferment: {
    stage: "Preferment",
    percentageOfOverallFlour: 15.0,
    formula: [{
      "ingredient": "Bread flour",
      "percentage": 100.0
    }, {
      "ingredient": "Water",
      "percentage": 125.0
    }, {
      "ingredient": "Starter",
      "percentage": 20.0
    }
    ]
  }
};

ReactDOM.render(
  <CRecipe recipe={vermontSourdough} />,
  document.getElementById('container'))
