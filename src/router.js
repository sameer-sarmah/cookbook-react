import React from 'react';
import { BrowserRouter, Route, IndexRoute, hashHistory } from 'react-router';

import RecipeComponent from './recipes/recipes.component';
import ShoppingCartComponent from './shopping-cart/shopping-list.component';

const componentRoutes = {
  component: RecipeComponent,
  path: '/',
  indexRoute: { component: RecipeComponent },
  childRoutes: [
    {
      path: 'recipes',
      component: RecipeComponent
    },
    {
      path: 'recipes/:id',
      component: RecipeComponent
    },
    {
        path: 'cart',
        component: ShoppingCartComponent
    }
  ]
};

const Routes = () => {
  return (
    <BrowserRouter  routes={componentRoutes} />
  );
};

export default Routes;
