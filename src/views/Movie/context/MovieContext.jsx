import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieContentProvider = ({ children }) => {
    
    return (
        <MovieContext.Provider
            value={{
          
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};