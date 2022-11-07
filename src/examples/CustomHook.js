import React, { useEffect, useState } from "react";

// Прелесть в том, что мы можем создавать любые комбинации, позволяет создавать как из конструктора любые участки кода

// Создадим два кастомных хука
// Для слежения за переменной
// Пример базового кастомного хука
function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

// Хук для работы с инпутом
function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

function CustomHook() {
    // const [name, setName] = React.useState('')
    // const [lastName, setLastName] = React.useState('')

    // const changeHandler = event => {
        // setName(event.target.value)
    // }
    const input = useInput('')
    const lastName = useInput('')

    useLogger(input.value)
    
    // const lastNameHandler = event => {
    //     setLastName(event.target.value)
    // }

    // Для custom hooks сайт usehooks.com

    return (
        <div className="container pt-3">
            {/* <input type="text" value={input.value} onChange={input.onChange} className="m-3"/> */}
            <input type="text" {...input.bind} className="m-3"/>
            <input type="text" {...lastName.bind} className="m-3"/>
            {/* Проблема возникает, когда нам нужно добавить несколько input, появляется однотипный код  */}
            {/* <input type="text" value={lastName} onChange={lastNameHandler} /> */}
            <button className="btn btn-warning" onClick={() => {
                input.clear()
                lastName.clear()
            }}>Очистить</button>
            <hr />
            <h1 className="pt-3 pb-3">{input.value} {lastName.value} {/*lastName*/}</h1>

        </div>
    )
}

export default CustomHook