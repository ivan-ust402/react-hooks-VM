import React, {useContext} from "react";
import { AlertContext } from "./useContextComponent";

export default function Alert() {
    const alert = useContext(AlertContext)

    if(!alert) return null
    return (
        <div className="alert alert-danger">
            Это очень и очень важное сообщение!
        </div>
    )
}