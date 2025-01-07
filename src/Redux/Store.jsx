import {configureStore} from '@reduxjs/toolkit'
import productReducer  from './ProductSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import cartResducer from './cartSlice'
import billingSlice from './billingSclice'


const persistConfig = {
  key : 'root',
  version :1,
  storage
}


const reducer = combineReducers({
  product: productReducer,
  cart:cartResducer,
  billing:billingSlice
})

const persistedReducer = persistReducer(persistConfig,reducer)


export const store= configureStore({
  reducer : persistedReducer,
  middleware : (getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
  })
})

export const persistor = persistStore(store)