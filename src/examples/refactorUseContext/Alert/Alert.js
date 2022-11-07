import React, {useContext} from "react";
import { AlertContext2 } from "../useContextRefactoring";

export default function Alert2() {
    const alert = useContext(AlertContext2)

    if(!alert) return null
    return (
        <div className="alert alert-danger">
            Это очень и очень важное сообщение!
        </div>
    )
}