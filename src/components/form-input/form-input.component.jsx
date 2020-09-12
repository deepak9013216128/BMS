import React from "react";

const FormInput = (props) => {
  const { name, type, required, placeholder } = props;
  console.log(name)
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default FormInput;