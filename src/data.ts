
export var VermontSourdough = {
  name: "Vermont Sourdough",
  ingredients: [
  "Bread flour",
  "Rye flour",
  "Water",
  "Salt",
  "Starter"
  ],
  flours: [
  "Bread flour",
  "Rye flour"
  ],
  starters: [
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
      "percentage": 1.9
    }, {
      "ingredient": "Starter",
      "percentage": 3
    }
    ]
  },
  preferment: {
    stage: "Levain",
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
}


export var TartineCountryLoaf = {
  name: "Tartine Country Loaf",
  ingredients: [
  "Bread flour",
  "Wholewheat flour",
  "Water",
  "Salt",
  "Starter"
  ],
  flours: [
  "Bread flour",
  "Wholewheat flour"
  ],
  starters: [
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
      "ingredient": "Wholewheat flour",
      "percentage": 10.0
    }, {
      "ingredient": "Water",
      "percentage": 82.5
    }, {
      "ingredient": "Salt",
      "percentage": 2
    }, {
      "ingredient": "Starter",
      "percentage": 2
    }
    ]
  },
  preferment: {
    stage: "Levain",
    percentageOfOverallFlour: 5.0,
    formula: [{
      "ingredient": "Bread flour",
      "percentage": 50.0
    }, {
      "ingredient": "Wholewheat flour",
      "percentage": 50.0
    }, {
      "ingredient": "Water",
      "percentage": 100.0
    }, {
      "ingredient": "Starter",
      "percentage": 40.0
    }
    ]
  }
}

