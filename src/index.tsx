import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {CRecipe} from "./App"
import {VermontSourdough} from "./data"

ReactDOM.render(
  <CRecipe recipe={VermontSourdough} />,
  document.getElementById('container'))
