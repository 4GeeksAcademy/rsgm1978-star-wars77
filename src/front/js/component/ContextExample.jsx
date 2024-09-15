//1 importar el hook useContext
import React { useContext} from "react";
 //2 importamos Context desde el archivo appContext.js
import { Context } from "../store/appContext.js";

export const ContextExample = () => {
   // 3 utilizo: Desectructurando store y el actions de Context el useContext
    const {store, actions} = useContext(Context);
//4 utilizo la sintaxis store.clave para poder mostrar el valor*/ 
    return  (
        <div className="container texte-center border mt-3">

            <p>{'store.user'}</p>
            <p>{'store.cohorte'}</p>
        </div>
        )
    } 
      //  esto se importa en el home como un componente