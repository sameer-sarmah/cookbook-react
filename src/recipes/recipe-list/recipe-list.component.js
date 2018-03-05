import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipe, fetchRecipes, selectRecipe } from "../../actions/action-creators";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom'
import './recipe-list.component.css';

class RecipeList extends Component {


    componentDidMount() {
        this.props.fetchRecipes();
    }



    createRow(recipeItem) {
        const rows = (<li key={recipeItem.recipe_id} onClick={this.listItemClicked.bind(this,recipeItem)}>{recipeItem["title"]}</li>);
        return rows;
    };

    render() {
        if (!this.props.recipes || this.props.recipes.length === 0) {
            return (<div></div>);
        }
        const table = (
            <div className="flex-column-container lightBlueBG scroll-box">
                <div className="flex-item text-block paleBlackTextColor ">
                    <ul className="recipe-item">
                        {this.props.recipes.map(this.createRow.bind(this))}
                    </ul>
                </div>
            </div>
        );
        return table;
    }

    listItemClicked(recipe) {
        this.props.history.push(`/recipes/${recipe.recipe_id}`)
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

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(RecipeList));