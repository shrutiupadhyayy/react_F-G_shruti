import { useState } from "react";
import "./formInput.css"

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
    const { label, reset, errorMessage, onChange, id, ...inputProps} = props;
    const handleFocus = (e) => {
      setFocused(true);
    }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput