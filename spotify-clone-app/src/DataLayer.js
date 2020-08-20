import React, {createContext, useReducer} from "react";


export const DataLayerContext = createContext();

//creating the DataLayer
//App is the children DataLayer wraps around App in App.js
export const DataLayer = ({ initialState,
                            reducer, 
                            children}) => (
                                <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
                                    {children}
                                </DataLayerContext.Provider>
                            )


