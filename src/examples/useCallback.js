import React, {useState, useMemo, useEffect} from "react";


function UseCallbackComponent() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'yellowgreen' : 'silver',
    }

    return (
        <>
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button 
                className="btn btn-success" 
                style={{marginRight: '10px'}} 
                onClick={() => setCount(prev => prev + 1)}
            >
                Добавить
            </button>
            <button 
                className="btn btn-warning" 
                onClick={() => setColored(prev => !prev)}
            >
                Изменить цвет
            </button>
        </>
    )
}

export default UseCallbackComponent