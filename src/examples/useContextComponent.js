import React, {useState} from "react";
import Alert from "./useContextAlert";
import Main from "./useContextMain";

export const AlertContext = React.createContext()

function UseContextComponent() {
    const [alert, setAlert] = useState(false)

    const toggleAlert = () => setAlert(prev => !prev)

    return (
        <AlertContext.Provider value={alert}>
            <div className="container pt-3">
                <Alert />
                <Main toggle={toggleAlert}/>
            </div>
        </AlertContext.Provider>
    )
}

export default UseContextComponent