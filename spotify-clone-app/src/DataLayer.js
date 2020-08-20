import React, {createContext, useReducer, useContext} from "react";


export const DataLayerContext = createContext();

//creating the DataLayer
//App is the children DataLayer wraps around App in App.js
export const DataLayer = ({ reducer,
                            initialState, 
                            children}) => (
                                <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
                                    {children}
                                </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext)




