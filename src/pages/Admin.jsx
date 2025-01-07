import React, { useReducer } from 'react'
import {useNavigate} from 'react-router-dom'
import ListAllProductTable from './ListAllProductTable';



let initialState ={
    product:false,
    sale:false,
    user:false
}

let reducer = (state,action) =>{
    switch (action.type) {
        case 'changeProduct':
            return Object.keys(state).reduce((newState, key) => {
                newState[key] = key === action.payload; // Activate only the selected button
                return newState;
              }, {});
            default:
              throw new Error(`Unknown action type: ${action.type}`);

    }
}
 
function Admin() {
    
    let navigate = useNavigate()

        const [state, dispatch] = useReducer(reducer,initialState)

        console.log(state)


  return <>
  <div className="flex ">
    {/* sideBar */}
    <div className="w-1/6 bg-orange-400 text-amber-100  text-xl">
        <div className=" p-6 flex flex-col justify-center items-center">
            <button   className={`before:hover:text-orange-400  btn btn-ghost hover:bg-slate-100 hover:rounded-2xl p-2 hover:text-orange-400  cursor-pointer`} onClick={()=>navigate('/home')}>Home</button>
            <p className={`before:hover:text-orange-400  btn btn-ghost hover:text-orange-400 hover:bg-slate-100 hover:rounded-2xl p-2  ${state.product ?'bg-slate-100 text-orange-400 rounded-2xl p-2':""}  cursor-pointer"`} onClick={()=>dispatch({type:'changeProduct',payload:"product"})}>Products</p>
            <p className={`before:hover:text-orange-400  btn btn-ghost hover:text-orange-400 hover:bg-slate-100 hover:rounded-2xl p-2  ${state.sale ?'bg-slate-100 text-orange-400 rounded-2xl p-2':""}  cursor-pointer"`} onClick={()=>dispatch({type:'changeProduct',payload:'sale'})}>Sales</p>
           
            <p className="hover:text-orange-400 hover:bg-slate-100 hover:rounded-2xl p-2  btn btn-ghost cursor-pointer" onClick={()=>navigate('/createproduct')}>Create Product</p>
            <p className={`before:hover:text-orange-400  btn btn-ghost hover:bg-slate-100 hover:text-orange-400 hover:rounded-2xl p-2  ${state.user ?'bg-slate-100 text-orange-400 rounded-2xl p-2':""}  cursor-pointer"`} onClick={()=>dispatch({type:'changeProduct',payload:'user'})}>Users</p>
        </div>
    </div>

    {/* page */}
    <div className="bg-orange-200 w-5/6 ">
    {state.product && <ListAllProductTable />}
    
    
    </div>
  </div>
  
  </>
}

export default Admin