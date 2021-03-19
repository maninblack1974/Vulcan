import React from "react";

export function TextInput(props) {
    return (
        <input {...props}/>
    )
}

export function FormBtn(props) {
    return(
      <button {...props}>
        {props.children}
      </button>
    )
}