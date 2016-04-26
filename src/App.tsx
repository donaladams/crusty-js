import * as React from 'react'
import {Component} from 'react'
import {Recipe} from './recipe'

export var CRecipe = (props:{recipe: Recipe}) => (
    <div className="recipe">
        <h1>{props.recipe.name}</h1>
        <p> Ingredients: </p>
    </div>
)
