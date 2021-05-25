import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
    filtered_products:[],
    all_products:[]
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
    const {products} = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: LOAD_PRODUCTS, payload:products})
    },[products])
  return (
    <FilterContext.Provider value='filter context'>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}