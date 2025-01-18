import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


let initialState = {cart:[],totalprice:0}


export const cartSlice = createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            addAllinCart :(state,action)=>{
                state.cart = action.payload;  
                // console.log(action.payload)
                let sum = state.cart?.reduce((acc,cur)=>acc+ Number(cur.productId.sellingPrice) , 0)
                state.totalprice = sum
            },
            addOnetocart:(state,action)=>{
                
                state.cart.push(action.payload)
            
          


            },
            totalPrice :(state,action)=>{
                let sum = state.cart.reduce((acc,cur)=>acc+ Number(cur.productId.sellingPrice) , 0)
                state.totalprice = sum
            },
            removeIteminChart:(state,action)=>{
                let filCart = state.cart.filter((a,b)=>a._id != action.payload.id)
                state.cart = filCart
                
                state.totalprice = state.totalprice - Number(action.payload.price)
            },
            deleteAlinCart :(state,action)=>{
                state.cart = []
                state.totalprice = 0
            }



        }
    }
)

export const {addAllinCart,totalPrice,removeIteminChart,addOnetocart,deleteAlinCart} = cartSlice.actions

export default cartSlice.reducer