

export  const Reducer = (state,action)=>{
    switch(action.type) {
        case 'changeProductName' : {
        
              return { 
                ...state,
                productName:action.nextVal
              }
            
        }
        case 'changeProductTypeName' : {
            return {
                ...state,
                productType:{...state.productType,name:action.nextVal}
            }
        }
        case 'changeBrandName' : {
            return {
                ...state,
                brandName:action.nextVal
            }
        }
        case 'changeNetworkType' :{
            return {
                ...state,
                productType:{
                    ...state.productType,
                    features:{
                        ...state.productType.features,
                        networkType:action.nextVal
                    }
                }
            }
        }
        case 'changeDisplayType' :{
            return {
                ...state,
                productType:{
                    ...state.productType,
                    features:{
                        ...state.productType.features,
                        displayType:action.nextVal
                    }
                }
            }
        }
        case 'changeMemory' : {
            return {
                ...state,
                productType:{
                    ...state.productType,
                    features:{
                        ...state.productType.features,
                        memory:action.nextVal
                    }
                }
            }
        }
        case 'changeBattary' : {
            return {
                ...state,
                productType:{
                    ...state.productType,
                    features:{
                        ...state.productType.features,
                        battary:action.nextVal
                    }
                }
            }
        }
        case 'changeImage' : {
            console.log(action.nextVal)
            return {
                ...state,
                productImage:action.nextVal
            }
        }

        case 'changePrice' : {
            return {
                ...state,
                price: action.nextVal
            }
        }
        case 'changeSellingPrice' : {
            return {
                ...state,
                sellingPrice: action.nextVal
            }
        }
        case 'changeDescription' : {
            return {
                ...state,
                description:action. nextVal
            }
        }
        case 'changeStockQuantity' : {
            return {
                ...state,
                stock: action.nextVal
            }
        }
        
    }
}