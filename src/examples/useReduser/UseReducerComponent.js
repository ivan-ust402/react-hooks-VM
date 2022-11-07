import React from "react";
import Alert2 from "./Alert/Alert";
import { AlertProvider } from "./Alert/AlertContext";
import Main2 from "./Main/Main";


function UseContextComponent2() {

    return (
        <AlertProvider>
            <div className="container pt-3">
                <Alert2 />
                <Main2 />
            </div>
        </AlertProvider>
    )
}

export default UseContextComponent2