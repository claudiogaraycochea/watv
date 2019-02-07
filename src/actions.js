import axios from 'axios';
import { API_URL } from './constants';

const loadProducts = () => {
  return dispatch => {
    axios.get(`${API_URL}products`)
      .then(response => {
        dispatch({
          type: "REPLACE_PRODUCTS",
          products: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "PRODUCT_RESPONSE",
          text: "Error in network :( Please try later."
        });
      });
  };
};

const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    product
  };
};

const removeFromCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    product
  };
};

const getPlaylist = () => {
  return dispatch => {
    const website_linkname = 'website_linkname=demotvprogram';
    axios.post(`${API_URL}getPlaylist`, website_linkname )
      .then(response => {
        dispatch({
          type: "REPLACE_PLAYLIST",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "PLAYLIST_RESPONSE",
          text: "Error in network :( Please try later."
        });
      });
  };
};

export { getPlaylist, loadProducts, addToCart, removeFromCart };