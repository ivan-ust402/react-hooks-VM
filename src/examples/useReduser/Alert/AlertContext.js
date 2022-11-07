import React, { createContext,  useContext, useReducer } from "react";

const AlertContext2 = createContext()

export const useAlert = () => {
    return useContext(AlertContext2)
}

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return {...state, visible: true, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}
        default: return state
    }
}

export const AlertProvider = ( {children } ) => {
    // useReduser позволяет также взаимодействовать со state, он принимает в себя непосредственно reducer, начальное состояние, а возвращает нам кортеж из state и функцию dispatch, которая позволяет взаимодействовать нам через reducer 
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = text => dispatch({ type: SHOW_ALERT, text })
    const hide = () => dispatch({ type: HIDE_ALERT })

    return (
        <AlertContext2.Provider value={{
            visible: state.visible,
            text: state.text,
            show,
            hide
        }}>
            { children }
        </AlertContext2.Provider>
    )
}