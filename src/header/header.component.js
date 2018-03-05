import React, { Component } from "react";
import './header.component.css';

export class HeaderComponent extends Component {

  render() {
    const header=(
    <div id="header" class="header flex-item width100pc" >
      <nav role="navigation">
        <ul>
          <li class="flex-start">
            <a href="/#">
              <img src={require("../images/rsz_recipes.jpg")} alt="rec" />
            </a>
          </li>
          <li class="flex-center">
            <a href="/#">
              <div class="header-centered-text">
                The Cove Kitchen
              </div>
            </a>
          </li>
          <li class="flex-end">

            <div class="flex-item go-to-cart-container">
              <button type="button" class="go-to-cart" onClick={this.goToCart.bind(this)}>My Cart</button>
            </div>

          </li>
        </ul>
      </nav>
    </div>);
    return header;


  }

  goToCart(){

  }

}
