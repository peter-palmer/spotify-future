import React, { createContext, useContext, useReducer } from 'react';

// Preparing the Data Layer
export const DataLayerContext = createContext();

// Create the Data Layer
export const DataLayer = ({ initialState, reducer, children }) => <DataLayerContext.Provider value={useReducer(reducer, initialState)}>{children}</DataLayerContext.Provider>;

// Getting access to dispatch actions
export const useDataLayerValue = () => useContext(DataLayerContext);
