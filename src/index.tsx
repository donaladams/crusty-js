import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {CRecipePage} from "./PageComponents"
import {recipes} from "./data"

ReactDOM.render(
  (<CRecipePage recipes={recipes} />),
  document.getElementById('container')
)
