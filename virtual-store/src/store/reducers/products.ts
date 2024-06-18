import { createReducer } from "@reduxjs/toolkit";
//Importar las acciones
import productsActions from "../actions/products";

const { capturarText } = productsActions;

//Se crea un objeto con el estado inicial.
const initialState = {
    text: "",
};

//Se crea un reducer con el estado inicial y un objeto con las acciones.
const productsReducer = createReducer(
    initialState,
    (build) => build.addCase(capturarText, (state, action) => {
        const newState = {
            ...state,
            text: action.payload.text,
        };
        return newState;
    }
    )
);

export default productsReducer;