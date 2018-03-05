import React, { Component } from "react";
import './header.component.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

 class HeaderComponent extends Component {


  componentDidMount() {
  }

  render() {
    const header = (
      <div id="header" className="header flex-item width100pc" >
        <nav role="navigation">
          <ul>
            <li className="flex-start" onClick={this.navigateTo.bind(this,'/recipes')}>
              <a >
                <img src={require("../images/rsz_recipes.jpg")} alt="rec" />
              </a>
            </li>
            <li className="flex-center">
              <a >
                <div className="header-centered-text">
                  The Cove Kitchen
              </div>
              </a>
            </li>
            <li className="flex-end">

              <div className="flex-item go-to-cart-container">
                <button type="button" className="go-to-cart" onClick={this.navigateTo.bind(this,'/cart')}>My Cart</button>
              </div>

            </li>
          </ul>
        </nav>
      </div>);
    return header;


  }

  navigateTo(path) {
    this.props.history.push(path)
  }

}
function mapStateToProps(state) {
  return {
    recipes: state.recipe.recipes
  };
}


export default withRouter(connect(mapStateToProps)(HeaderComponent));
