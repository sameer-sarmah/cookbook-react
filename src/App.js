import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, IndexRoute, hashHistory ,Switch} from 'react-router-dom';
import RecipeComponent from './recipes/recipes.component';
import ShoppingCartComponent from './shopping-cart/shopping-list.component';
import  HeaderComponent  from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

class App extends Component {
  render() {
    return (


      <BrowserRouter>
        <div className="App">
          <HeaderComponent />
          <div className="App">
            <Switch>
                <Route exact path="/" component={RecipeComponent} />
                <Route path="/recipes/:id" component={RecipeComponent} />
                <Route exact path="/recipes" component={RecipeComponent} />
                <Route path="/cart" component={ShoppingCartComponent} />
                <Route  component={PageNotFoundComponent} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
