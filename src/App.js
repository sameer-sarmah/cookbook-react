import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, IndexRoute, hashHistory } from 'react-router-dom';
import RecipeComponent from './recipes/recipes.component';
import ShoppingCartComponent from './shopping-cart/shopping-list.component';
import { HeaderComponent } from './header/header.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <BrowserRouter>
          <div className="App">
          <Route exact path="/" component={RecipeComponent} />
          <Route exact path="/recipes" component={RecipeComponent}/>
          <Route path="/recipes/:id" component={RecipeComponent} />
          <Route path="/cart" component={ShoppingCartComponent} />
           </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
