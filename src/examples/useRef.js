import React, {useState, useEffect, useRef} from "react";

// useRef очень похож на то как мы работаем со state

// Но это не самый хороший подход, потому что у нас есть переменная, которая находится вне поля действия реакта и она находится вне компонента реакта и это не совсем правильно
// let renderCount = 1

// Ну и чтобы выполнить задачу правильно, следует воспользоваться хуком useRef, который по своей сути очень похож на useState

function UseRefComponent() {
    // Посчитать сколько раз мы рендерили наш компонент
    // Для начала сделаем это через state
    // если оставить это так, то мы войдем в бесконечный цикл

    // const [renderCount, setRenderCount] = useState(1)

    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // })

    // Почему так происходит?
    // Мы попадаем в useEfeect и меняем state 
    // Но как только мы меняем state таким образом, то следом после этого 
    // Идет обязательный перерендер страницы
    // И данное действие будет повторятся до лемита счетчика

    // Исправление ситуации 
    // Создать вне компонента переменную renderCount 

    const [value, setValue] = useState('initial')
    // renderCount - теперь объект, у которого присутствует свойство current. Если мы хотим воспользоваться значением этого ref-а, то мы обращаемся к свойству current
    const renderCount = useRef(1)

    // Еще ref обладает еще некоторыми возможностями, например, получение ссылок на какие-либо дом элементы 
    const inputRef = useRef(null)

    // ref часто используется для того, чтобы задавать фокусы на элементы
    // еще одно предназначение ref для получения предыдущего состояния state. В нашем случае я хочу получать предыдущие значения value, что было до рендера  
    const prevValue = useRef('')

    useEffect(() => {
        // renderCount++
        renderCount.current++
        // в отличие от state ref не вызывает после себя rerender
        // Если мы хотим что-то сохранить между рендерами, то используем ref

        // посмотрим что находится в имуте в данном useEffect
        console.log(inputRef.current.value)
    })

    useEffect(() => {
        // Как только изменится состояние value мы хотим изменить прошлое состояние
        prevValue.current = value
    }, [value])

    // Выполняем программный фокус на инпуте
    const focus = () => inputRef.current.focus()

    return (
        <div>
            {/* <h1>Количество рендеров: {renderCount}</h1> */}
            <h1>Количество рендеров: {renderCount.current}</h1>
            <h2>Прошлое состояние: {prevValue.current}</h2>
            <input ref = {inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn-warning" onClick={focus}>Фокус</button>
        </div>
    )
}

export default UseRefComponent