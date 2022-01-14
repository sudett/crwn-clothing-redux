import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHomeItems } from "../../redux/home/home.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./menu-container.styles.scss";

const MenuContainer = ({ homeItems }) => (
  <div className="menu__container">
    {homeItems.map(({ id, ...otherProps }) => (
      <MenuItem key={id} id={`section${id}`} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  homeItems: selectHomeItems,
});

export default connect(mapStateToProps)(MenuContainer);
