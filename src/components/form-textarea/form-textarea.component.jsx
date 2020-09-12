import React from 'react';

const FormTextarea = (props) => {
  const { name, type, required, placeholder } = props;
  return (
    <div className="form-group">
      <textarea
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  )
}

export default FormTextarea;