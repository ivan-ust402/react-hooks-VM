import React, { createContext, useState, useContext } from "react";

const AlertContext2 = createContext()
// const AlertToggleContext2 = createContext()

export const useAlert = () => {
    return useContext(AlertContext2)
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext2)
// }

export const AlertProvider = ( {children } ) => {
    const [alert, setAlert] = useState(false)
       
    const toggle = () => setAlert(prev => !prev)

    return (
        // <AlertContext2.Provider value={alert}>
        //     <AlertToggleContext2.Provider value={toggle}>
        //         {children}
        //     </AlertToggleContext2.Provider>
        // </AlertContext2.Provider>
        <AlertContext2.Provider value={{
            visible: alert,
            toggle
        }}>
            { children }
        </AlertContext2.Provider>
    )
}