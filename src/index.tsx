import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {CRecipe} from "./App"
import {VermontSourdough, TartineCountryLoaf, HazelnutFigLevain, Ciabatta, CarawayRye, OatPorridge, BaguettesDeTradition} from "./data"



ReactDOM.render(
  (<div>
    <CRecipe recipe={VermontSourdough} />
    <CRecipe recipe={TartineCountryLoaf} />
    <CRecipe recipe={HazelnutFigLevain} />
    <CRecipe recipe={Ciabatta} />
    <CRecipe recipe={BaguettesDeTradition} />
    <CRecipe recipe={OatPorridge} />
    <CRecipe recipe={CarawayRye} />
  </div>),
  document.getElementById('container'))
