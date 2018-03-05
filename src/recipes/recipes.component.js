import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipe, fetchRecipes, selectRecipe } from "../actions/action-creators";
import { bindActionCreators } from "redux";
import './recipes.component.css';
import  RecipeList  from './recipe-list/recipe-list.component';
import  RecipeDetail  from './recipe-detail/recipe-detail.component';

class RecipeComponent extends Component {

    render() {
        const panel = (
            <div className="flex-item flex-row-container height100pc width100pc" >
                <div className="width30pc" >{<RecipeList/>}</div>
                <div className="width70pc">{<RecipeDetail/>}</div>
            </div>
        );
        return panel;
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipe.recipes,
        selectedRecipe: state.recipe.selectedRecipe
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRecipe: fetchRecipe, fetchRecipes: fetchRecipes, selectRecipe: selectRecipe },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeComponent);