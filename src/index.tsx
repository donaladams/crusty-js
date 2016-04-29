import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {CRecipe} from "./App"
import {VermontSourdough, TartineCountryLoaf} from "./data"



ReactDOM.render(
  (<div>
    <CRecipe recipe={VermontSourdough} />
    <CRecipe recipe={TartineCountryLoaf} />
  </div>),
  document.getElementById('container'))
