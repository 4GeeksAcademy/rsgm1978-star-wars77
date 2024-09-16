import React, { useContext } from "react";
import { Context } from "../store/appContext.js";


export const Characters = () => {
    const { store } = useContext(Context)

    return (
        <div className="container">
            <h1>Caharacters</h1>
            {/* <ul className="list-group">
                {store.characters.map((item) =>
                <li key={item.uid} className="list-group-item">
                    {item.name}
                </li>)                
                }
            </ul> */}
        </div>
    )
}