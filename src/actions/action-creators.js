import { FETCH_RECIPES,FETCH_COUNT,FETCH_RECIPE,ADD_TO_CART,DELETE_FROM_CART,GET_RECIPES_IN_CART,SELECT_RECIPE } from './types';
import {RecipeService} from  '../services/recipe.service';
import {CartService} from  '../services/cart-service.service';

let recipeCount;
let growingThreshold=5;
let recipeSvc=new RecipeService();
let cartSvc=new CartService();
export function fetchRecipes(options) {
    let recipes=recipeSvc.getRecipes();
    return (dispatch) => {
        dispatch({
            type: FETCH_RECIPES,
            payload: recipes
        });
    };
}

export function selectRecipe(selectedRecipe) {
    return (dispatch) => {
        dispatch({
            type: SELECT_RECIPE,
            payload: selectedRecipe
        });
    };
}


export function fetchRecipe(id) {
    let recipe=recipeSvc.getRecipe(id);
    return (dispatch) => {
        dispatch({
            type: FETCH_RECIPE,
            payload: recipe
        });
    };
}

export function addToCart(recipe){
   cartSvc.addToCart(recipe);
   let recipes=cartSvc.getRecipesInCart();
   dispatch({
    type: ADD_TO_CART,
    payload: recipes
});
}

export function removeFromCart(recipeID){
    cartSvc.removeFromCart(recipeID);
    let recipes=cartSvc.getRecipesInCart();
    dispatch({
     type: DELETE_FROM_CART,
     payload: recipes
 });
}

export function getRecipesInCart(){
    let recipes=cartSvc.getRecipesInCart();
    dispatch({
     type: GET_RECIPES_IN_CART,
     payload: recipes
 });
}