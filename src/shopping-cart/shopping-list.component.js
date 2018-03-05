import { CartService } from '../services/cart-service.service';

export class ShoppingListComponent {
   recipes;
   cartService=new CartService();
  constructor() { 
    this.recipes=this.cartService.getRecipesInCart();
  }


}
