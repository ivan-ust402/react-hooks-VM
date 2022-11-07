import React from "react"
// import { useAlertToggle } from "../Alert/AlertContext"
import { useAlert } from "../Alert/AlertContext"

export default function Main2() {
    const {toggle} = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button className="btn btn-success" onClick={toggle}>Показать alert</button>
        </>
    )
}