import React from "react";
import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ imageUrl, title, id, size, linkUrl }) => (
  <Link to={linkUrl} className={`${size ? "large" : ""} menu__item`} id={id}>
    <div
      className="menu__back-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="menu__content">
      <h2 className="menu__title">{title}</h2>
      <p>Shop Now</p>
    </div>
  </Link>
);
export default MenuItem;
