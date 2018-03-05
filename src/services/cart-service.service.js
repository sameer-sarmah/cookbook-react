


export class CartService {
  recipesInCar=[];
  constructor() { }

  addToCart(recipe){
    let recipeID=recipe.recipe_id;
    if(!this.isContained(recipeID)){
      this.recipesInCart.push(recipe);
    }
    
  }

  removeFromCart(recipeID){
   let index=-1;
   for(let i=0;i<this.recipesInCart.length;i++){
     if(this.recipesInCart[i].recipe_id===recipeID){
       index=i;
       break;
     }
   }
   this.recipesInCart.splice(index,1);
  }


   isContained(recipeID){
    let recipeItem= this.recipesInCart.find((recipe)=>{
        return recipe.recipe_id===recipeID
    });
    if(!recipeItem){
      return false;
    }
    else{
      return true;
    }
  }

  getRecipesInCart(){
    return this.recipesInCart;
  }

}
