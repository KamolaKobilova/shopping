import {ActionTypes} from "../constants/action-types";
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};
import {ActionTypes} from "../constants/action-types";
export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SElECTED_PRODUCTS,
        payload: product,
    };
};