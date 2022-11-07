import React, {useState} from "react";

function UseMemoComponent() {
    const [number, setNumber] = useState(42)
    const styles = {
        button: {
            marginRight: '10px',
        }
    }

    return (
        <>
            <h1>Вычисляемое свойство: {number}</h1>
            <button className="btn btn-success" style={styles.button} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
        </>
    )
}

export default UseMemoComponent