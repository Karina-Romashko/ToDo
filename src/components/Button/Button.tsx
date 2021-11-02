import React from "react"

interface ButtonProps {
    onBtnClick:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
}


export const Button:React.FC<ButtonProps>=(onBtnClick)=> {
   
        return(
            <button onBtnClick={onBtnClick} ></button>
        )
    
}