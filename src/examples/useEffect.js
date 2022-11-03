import React, {useState} from "react";

const styles = {
    button: {
        marginRight: "5px",
    },
    div: {
        margin: '10px auto',
        width: '400px',
    }
}

function UseEffectComponent() {
    const [type, setType] = useState('users')

    return (
        <div style={styles.div}>
            <h1>Ресурс: {type}</h1>
            <button className="btn btn-warning" style={styles.button}>Пользователи</button>
            <button className="btn btn-warning" style={styles.button}>Todo</button>
            <button className="btn btn-warning" style={styles.button}>Посты</button>
        </div>
    )
}

export default UseEffectComponent