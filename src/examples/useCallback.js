import React, {useState, useCallback} from "react";
import ItemsList from "./useCallbackItemList";


function UseCallbackComponent() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'yellowgreen' : 'silver',
    }

    // Предположим, что у нас есть функция, которая на основе count генерировать количество элементов, которое в последствии мы выведем в другом элементе

/*     const generateItemsFromAPI = () => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
        // Представим, что у нас не статическая генерация, а запрос к серверу, получается, что мы вызываем эту функцию много лишних раз, происходит удар по производительности. Для этого придумали хук useCallback. useCallback по сути это тоже самое что и useMemo
    } */

    // Передадим как референс данную функцию в компонент
    const generateItemsFromAPI = useCallback((indexNumber) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`)
    }, [count]) 
    // Вызывается callback только при изменении count 

    // Проведем аналогию useCallback с useMemo:
    // useCallback от также оборачивает callback, но он и его полностью возвращает. В useMemo возвращается результат, а в useCallback сама функция 
    // useCallback нужен для того, чтобы функция не изменялась при новом рендере, она как бы кэшировалась и соответственно у нас не было каких-либо рекурсивных вызовов, ну и дополнительных сторонних проблем   

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