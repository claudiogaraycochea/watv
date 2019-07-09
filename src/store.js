import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SIDE_MENU":
      return {
        ...state,
        sideMenu: action.sideMenu
      };

    case "SET_HEADER_TITLE":
      return {
        ...state,
        headerTitle: action.headerTitle
      };

    case "PRODUCT_RESPONSE": 
      return {
        ...state,
        text: action.text
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.concat(action.product)
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.product.id)
      };

    case "REPLACE_PLAYLIST":
      return {
        ...state,
        data: action.data
      };

    case "PLAYLIST_RESPONSE": 
      return {
        ...state,
        text: action.text
      };
      
    default: 
      return state; // eslint-disable-next-line
  };
}

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  //console.log('next state', store.getState())
  return result
}

export default createStore(reducer, { cart:[], products:[] }, applyMiddleware(logger,thunk) );