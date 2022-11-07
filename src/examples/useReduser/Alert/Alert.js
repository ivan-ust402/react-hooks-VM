import React, {useContext} from "react";
import { AlertContext2, useAlert } from "./AlertContext";


export default function Alert2() {
    const alert = useAlert()

    if(!alert.visible) return null
    return (
        <div className="alert alert-danger" onClick={alert.toggle}>
            Это очень и очень важное сообщение!
        </div>
    )
}