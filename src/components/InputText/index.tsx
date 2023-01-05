import React from "react";
import "./styles.css";

export default function InputText(props : {label: string, name : string, setText: (text: string) => void, required?: boolean}) {
    return (
        <div className="input-text-container">
            <label htmlFor={props.name}>{props.label} {props.required ? (<span>*</span>) : null}</label>
            <input name={props.name} id={props.name} required={props.required ? true : false} type="text" placeholder={props.label} onChange={(e) => props.setText(e.target.value)}/>
        </div>
    );
}