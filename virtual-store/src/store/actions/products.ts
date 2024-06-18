//Se importa la función createAction de redux-toolkit, el cual se encarga de crear una acción con un nombre y un payload.
import { createAction } from "@reduxjs/toolkit";

//Se crea una constante capturarText, la cual se encarga de capturar el texto que se le pase como argumento.
const capturarText = createAction('capturarText', (obj) => {
    //Se retorna un objeto con el texto que se le pasa como argumento.
    return {
        payload: { text: obj.text },
    };
});

//Se exporta un objeto con la constante capturarText.
const productsActions = { capturarText };

export default productsActions;