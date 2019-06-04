import React from "react";

const Input = props => {
  return (
    <div className="form-group col-sm-6 col-md-6 col-xl-8">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        // {...props}
      />
    </div>
  );
};

export default Input;
