import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {CRecipe} from "./App"
import {VermontSourdough, TartineCountryLoaf, HazelnutFigLevain} from "./data"



ReactDOM.render(
  (<div>
    <CRecipe recipe={VermontSourdough} />
    <CRecipe recipe={TartineCountryLoaf} />
    <CRecipe recipe={HazelnutFigLevain} />
  </div>),
  document.getElementById('container'))
