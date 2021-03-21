import React from "react";

const TextInput = (props) => {
    return (
        <input {...props}/>
    )
};

const FormBtn = (props) => {
    return(
      <button {...props}>
        {props.children}
      </button>
    )
};

export { TextInput, FormBtn };