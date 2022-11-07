import React, {useState} from "react";
import Alert2 from "./Alert/Alert";
import Main2 from "./Main/Main";

export const AlertContext2 = React.createContext()

function UseContextComponent2() {
    const [alert, setAlert] = useState(false)

    const toggleAlert = () => setAlert(prev => !prev)

    return (
        <AlertContext2.Provider value={alert}>
            <div className="container pt-3">
                <Alert2 />
                <Main2 toggle={toggleAlert}/>
            </div>
        </AlertContext2.Provider>
    )
}

export default UseContextComponent2