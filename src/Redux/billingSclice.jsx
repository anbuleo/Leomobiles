import {createSlice} from '@reduxjs/toolkit'



export const billingSlice = createSlice({
    name:'billing',
    initialState:{
        shippingAddress:{}
    },
    reducers:{
        addBillingAddress:(state,action)=>{
            state.shippingAddress = action.payload
        }
    }
})

export const {addBillingAddress} = billingSlice.actions

export default billingSlice.reducer