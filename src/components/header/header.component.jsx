import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCartOpen } from "../../redux/cart/cart.selectors";

import ShoppingIcon from "../shopping-icon/shopping-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ isCartOpen }) => {
  return (
    <header className="header">
      <Link to="/">
        <Logo className="header__logo" />
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav__item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav__item">
            <Link to="/signin">Sign in</Link>
          </li>
          <li className="nav__item">
            <ShoppingIcon />
          </li>
        </ul>
        {isCartOpen && <CartDropdown />}
      </nav>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  isCartOpen: selectIsCartOpen,
});

export default connect(mapStateToProps)(Header);
