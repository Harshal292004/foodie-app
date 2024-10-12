import React, { useReducer, useState } from 'react'
import { createContext,useContext } from "react";

const CartStateContext = createContext()
const CartDispatchContext= createContext()

const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD':
            const{
                id,
                imageSrc,
                title,
                description,
                priceOptions,
                maxQuantity,
                eggMark,
                size,
                quantity,
                price }=action.item
            return [...state,{id,imageSrc,title,description,priceOptions,maxQuantity,eggMark,size,quantity,price}]
        case 'decrement':
            return {}
        default:
            throw new Error()
    }
}



export const CartProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,[])


    return(
    <CartDispatchContext.Provider value={dispatch}>
         <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider> 
    </CartDispatchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext)
export const useDispatchCart= ()=>useContext(CartDispatchContext)