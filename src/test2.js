import { useState } from 'react';
const ans = [];
const useSSNFields = () => {
    const [ssnValues, setValue] = useState({
      ssn1: "",
      ssn2: "",
      ssn3: ""
    });
    
    
    return {
      handleChange: e => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
  
        // Check if they hit the max character length
        if (value.length >= maxLength) {
          // Check if it's not the last input field
          if (parseInt(fieldIndex, 10) < 3) {
            // Get the next input field
            const nextSibling = document.querySelector(
              `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
            );
  
            // If found, focus the next field
            if (nextSibling !== null) {
              nextSibling.focus();
            }
          }
        }
  
        setValue({
          ...value,
          [`ssn${fieldIndex}`]: value
        });
      }
    };
  };
  
  const Test2 = () => {
    const { handleChange } = useSSNFields();
  
    return (
      <>
        <input
          type="text"
          name="ssn-1"
          maxLength={1}
          onChange={handleChange} />
        <input
          type="text"
          name="ssn-2"
          maxLength={1}
          onChange={handleChange} />
        <input
          type="text"
          name="ssn-3"
          maxLength={1}
          onChange={handleChange} />
      </>
    );
  };

  const Getword = ()=>{
    const { handleChange } = useSSNFields();
  }

  export default Test2;