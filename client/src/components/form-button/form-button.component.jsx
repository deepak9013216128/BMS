import React from "react";

const FormButton = ({ label }) => {

  return (
    <div className="form-group">
      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block login-btn"
      >
        {label}
      </button>
    </div>
  )
}

export default FormButton;