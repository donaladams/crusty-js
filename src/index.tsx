import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {CRecipe} from "./App"
import {VermontSourdough, TartineCountryLoaf, HazelnutFigLevain, Ciabatta} from "./data"



ReactDOM.render(
  (<div>
    <CRecipe recipe={VermontSourdough} />
    <CRecipe recipe={TartineCountryLoaf} />
    <CRecipe recipe={HazelnutFigLevain} />
    <CRecipe recipe={Ciabatta} />
  </div>),
  document.getElementById('container'))
