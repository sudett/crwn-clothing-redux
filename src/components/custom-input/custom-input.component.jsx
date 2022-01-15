import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({ labelText, changeHandler, ...otherProps }) => (
  <div className="custom-input">
    <input className="form__input" onChange={changeHandler} {...otherProps} />
    {labelText ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""} form__label`}
      >
        {labelText}
      </label>
    ) : null}
  </div>
);

export default CustomInput;
