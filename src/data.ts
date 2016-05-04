
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
  }, steps: [
      {
          "num": 1,
          "title": "Levain Build",
          "text": "Mix the ingredients for the Levain and leave for around 12 hours",
          "duration": 43200,
          "type": "mix-preferment"
      }, {
          "num": 2,
          "title": "Autolyse",
          "text": "Mix the remaining ingredients except salt. Leave to autolyse for 30 mins.",
          "duration": 1800,
          "type": "autolyse"
      }, {
          "num": 3,
          "title": "Mix",
          "text": "Add salt with a little water and mix. Knead to moderate gluten development",
          "duration": 600,
          "type": "final-mix"
      }, {
          "num": 4,
          "title": "Bulk Fermentation",
          "text": "Leave to rise for 2.5 hours. Fold the dough twice at 50 minute intervals.",
          "duration": 9000,
          "type": "bulk-fermentation"
      }, {
          "num": 5,
          "title": "Divide and Shape",
          "text": "Divide into desired size, pre-shape and then shape.",
          "duration": 1200,
          "type": "divide-and-shape"
      }, {
          "num": 6,
          "title": "Proofing",
          "text": "Proof the shaped dough for 1.5 to 2 hours.",
          "duration": 5400,
          "type": "proof"
      }, {
          "num": 7,
          "title": "Bake",
          "text": "Bake in hot oven for 30-40 minutes depending on size. Start oven at 250 degrees C, reducing to 210 after 15 minutes.",
          "duration": 2400,
          "type": "bake"
      }
  ]
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
  }, steps: [
      {
          "num": 1,
          "title": "Levain Build",
          "text": "Mix the ingredients for the Levain and leave for around 12 hours",
          "duration": 43200,
          "type": "mix-preferment"
      }, {
          "num": 2,
          "title": "Autolyse",
          "text": "Mix the remaining ingredients except salt. Leave to autolyse for 30 mins.",
          "duration": 1800,
          "type": "autolyse"
      }, {
          "num": 3,
          "title": "Mix",
          "text": "Add salt with a little water and mix. Knead to moderate gluten development",
          "duration": 600,
          "type": "final-mix"
      }, {
          "num": 4,
          "title": "Bulk Fermentation",
          "text": "Leave to rise for 3-4 hours. Stretch and fold the dough every 30 minutes intervals.",
          "duration": 9000,
          "type": "bulk-fermentation"
      }, {
          "num": 5,
          "title": "Divide and Shape",
          "text": "Divide into desired size, pre-shape and then shape.",
          "duration": 1200,
          "type": "divide-and-shape"
      }, {
          "num": 6,
          "title": "Proofing",
          "text": "Proof the shaped dough for 2-3 hours or overnight in the Fridge.",
          "duration": 5400,
          "type": "proof"
      }, {
          "num": 7,
          "title": "Bake",
          "text": "Bake in hot oven for 40 minutes depending on size. Start oven at 250 degrees C, reducing to 210 after 20 minutes.",
          "duration": 2400,
          "type": "bake"
      }
  ]
}

export var HazelnutFigLevain = {
  name: "Hazelnut and Fig Levain",
  ingredients: [
  "Bread flour",
  "Wholewheat flour",
  "Water",
  "Salt",
  "Dried Figs",
  "Hazelnuts",
  "Anise seed",
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
      "percentage": 75
    }, {
      "ingredient": "Wholewheat flour",
      "percentage": 25
    }, {
      "ingredient": "Water",
      "percentage": 72
    }, {
      "ingredient": "Salt",
      "percentage": 2
    }, {
      "ingredient": "Dried Figs",
      "percentage": 18
    }, {
      "ingredient": "Hazelnuts",
      "percentage": 18
    }, {
      "ingredient": "Anise seed",
      "percentage": 0.5
    }, {
      "ingredient": "Starter",
      "percentage": 4
    }
    ]
  },
  preferment: {
    stage: "Levain",
    percentageOfOverallFlour: 20.0,
    formula: [{
      "ingredient": "Bread flour",
      "percentage": 100.0
    }, {
      "ingredient": "Water",
      "percentage": 60.0
    }, {
      "ingredient": "Starter",
      "percentage": 20.0
    }
    ]
  }, steps: [
    {
      "num": 1,
      "title": "Levain Build",
      "text": "Mix the ingredients for the Levain and leave for around 12 hours",
      "duration": 43200,
      "type": "mix-preferment"
    }, {
      "num": 2,
      "title": "Mix",
      "text": "Mix the remaining ingredients except the figs and hazelnuts. Knead until moderate gluten development.",
      "duration": 600,
      "type": "final-mix"
    }, {
      "num": 3,
      "title": "Bulk Fermentation",
      "text": "Leave to rise for 2 to 2.5 hours. Fold the dough halfway through.",
      "duration": 9000,
      "type": "bulk-fermentation"
    }, {
      "num": 4,
      "title": "Divide and Shape",
      "text": "Divide into desired size, pre-shape and then shape.",
      "duration": 1200,
      "type": "divide-and-shape"
    }, {
      "num": 5,
      "title": "Proofing",
      "text": "Proof the shaped dough for 1.5 to 2 hours.",
      "duration": 5400,
      "type": "proof"
    }, {
      "num": 6,
      "title": "Bake",
      "text": "Bake in hot oven for 30-40 minutes depending on size. Start oven at 250 degrees C, reducing to 210 after 15 minutes.",
      "duration": 2400,
      "type": "bake"
    }
  ]
}

