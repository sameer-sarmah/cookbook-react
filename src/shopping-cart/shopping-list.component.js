import { CartService } from '../services/cart-service.service';
import './shopping-list.component.css';
import { addToCart, removeFromCart } from "../actions/action-creators";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import React, { Component } from "react";

export class ShoppingListComponent extends Component{



  componentDidMount() {

  }
  render() {
    if (!this.props.recipes || this.props.recipes.length == 0) {
      return (
        <div>
          <p>The Shopping cart is empty</p>
        </div>
      );
    }
    else {
      <div className="flex-item flex-row-container width100pc height100pc align-center" >
        <div >
          {this.props.recipes.map(this.createRow.bind(this))}
        </div>
      </div>
    }
  }


  createRow(addedRecipe) {
    const item = (
      <div className="flex-row-container list-item align-center">
        <div className="image-container flex-item">
          <img src={addedRecipe.image_url} />
        </div>
        <div className="text-container flex-column-container flex-item">
          <h3 className="flex-item">Recipe Item:{addedRecipe.recipe_id}</h3>
          <h3 className="flex-item">{addedRecipe.title}</h3>
          <div className="flex-item">Social Rank:{addedRecipe.social_rank}</div>
        </div>
        <div className="flex-row-container list-item align-center">
          <div className="flex-item svg-icon" onClick={this.removeFromCart.bind(this, addedRecipe)}>
            <img src={require("../images/rubbish-bin.svg")} />
          </div>
        </div>
      </div>);
    return item;
  }

  removeFromCart(recipe) {
      this.props.removeFromCart(recipe.recipe_id);
  }
}


function mapStateToProps(state) {
  return {
    recipes: state.cart.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeFromCart: removeFromCart },
    dispatch);
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ShoppingListComponent));