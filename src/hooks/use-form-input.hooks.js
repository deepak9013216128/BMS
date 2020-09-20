import { useState } from "react";


const useFormInput = (intialValue) => {
  const [state, setState] = useState(intialValue);

  const handlleChange = e => {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }))
  }

  return [state, handlleChange]

}

export default useFormInput;