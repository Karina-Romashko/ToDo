import React from "react";

export interface InputProps{
    value: string;
    onChange: (event:React.ChangeEvent<HTMLInputElement>)=>void;
}

export const Input:React.FC<InputProps>=({value, onChange})=>{

    return(
        <input value={value} onChange={onChange} />
    )
}
