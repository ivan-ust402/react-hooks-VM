import React, {useState, useMemo, useEffect} from "react";
import ItemsList from "./useCallbackItemList";


function UseCallbackComponent() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'yellowgreen' : 'silver',
    }

    // Предположим, что у нас есть функция, которая на основе count генерировать количество элементов, которое в последствии мы выведем в другом элементе

    const generateItemsFromAPI = () => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
    }
    // Передадим как референс данную функцию в компонент

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

            <ItemsList getItems={generateItemsFromAPI}/>
        </>
    )
}

export default UseCallbackComponent