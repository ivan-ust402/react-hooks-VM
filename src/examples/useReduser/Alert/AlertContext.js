import React, { createContext, useState, useContext, useReducer } from "react";

const AlertContext2 = createContext()

export const useAlert = () => {
    return useContext(AlertContext2)
}

export const AlertProvider = ( {children } ) => {
    const [alert, setAlert] = useState(false)
       
    const toggle = () => setAlert(prev => !prev)

    return (
        <AlertContext2.Provider value={{
            visible: alert,
            toggle
        }}>
            { children }
        </AlertContext2.Provider>
    )
}