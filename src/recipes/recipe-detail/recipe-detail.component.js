import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipe, fetchRecipes, selectRecipe } from "../../actions/action-creators";
import { bindActionCreators } from "redux";
import './recipe-detail.component.css';
import { CartService } from "../../services/cart-service.service";

class RecipeDetail extends Component {
    cartService=new CartService();
    componentDidMount() {

        
    }

    componentDidUpdate(prevProps, prevState) {
        let recipeID;
        if(!!this.props.match && !!this.props.match.params){
            recipeID=this.props.match.params.id;
        }
        else if(!!this.props.recipes && this.props.recipes.length>0){
            recipeID=this.props.recipes[0].recipe_id;
        }
        if(!!recipeID){
            this.props.fetchRecipe(recipeID);
        }
        }

    createRow(listItem) {
        const rows = (<li >{listItem}</li>);
        return rows;
    };

    addToCart(){
        if(!!this.selectedRecipe){
          this.cartService.addToCart(this.selectedRecipe);
        }
      }
    
    render() {
        if (!this.props.selectedRecipe || Object.keys(this.props.selectedRecipe).length === 0) {
            return (<div></div>);
        }
        const table = (
            <div className="height100pc width100pc">
                <div className="flex-column-container height100pc">
                    <div className="flex-row-container flex-item textAlignCenter height55pc" >
                        <div className="flex-item ">
                            <img src={this.props.selectedRecipe.image_url} className="height100pc" />
                        </div>
                        <div className="flex-item text-block">
                            <h2>{this.props.selectedRecipe.title}</h2>
                        </div>
                        <div className="flex-item ">
                            <button type="button" className="add-to-cart"
                            onClick={this.addToCart.bind(this)}>Add</button>
                        </div>
                    </div>

                    <div className="flex-row-container flex-item darkGreyBG height45pc">
                        <div className="flex-item text-block whiteTextColor width40pc marginLeft5pc">
                            <h2>Ingredients:</h2>
                            <ul>
                                {this.props.selectedRecipe.ingredients.map(this.createRow)}
                            </ul>
                        </div>
                        <div className="flex-item text-block whiteTextColor width60pc">
                            <h2>Directions:</h2>
                            <ul>
                                {this.props.selectedRecipe.directions.map(this.createRow)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
        return table;
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);