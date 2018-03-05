
import { CartService } from '../../services/cart-service.service';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipe, fetchRecipes, selectRecipe } from "../../actions/action-creators";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom'
import './shopping-item.component.css';

export class ShoppingItemComponent extends Component  {
  cartService=new CartService();

  removeFromCart(){
    this.cartService.removeFromCart(this.selectedRecipe.recipe_id);
  }

  render() {
    const item=(	
      <div class="flex-row-container list-item">
        <div class="image-container flex-item">
          <img src="{this.props.selectedRecipe.image_url}"/>
        </div>
        <div class="text-container flex-column-container flex-item">
          <h3 class="flex-item">Recipe Item:{this.props.selectedRecipe.recipe_id}</h3>
          <h3 class="flex-item">{this.props.selectedRecipe.title}</h3>
          <div class="flex-item">Social Rank:{this.props.selectedRecipe.social_rank}</div>
        </div>	
        <div class="flex-row-container list-item">
          <div class="flex-item svg-icon" onClick={this.removeFromCart.bind(this)}>
            <img src="images/rubbish-bin.svg"/>
          </div>
        </div>
      </div>);
      return item;
  }
}
