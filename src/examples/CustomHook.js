import React from "react";

// Прелесть в том, что мы можем создавать любые комбинации, позволяет создавать как из конструктора любые участки кода
function CustomHook() {
    const [name, setName] = React.useState('')

    const changeHandler = event => {
        setName(event.target.value)
    }

    return (
        <div className="container pt-3">
            <input type="text" value={name} onChange={changeHandler} />
            <h1 className="pt-3 pb-3">{name}</h1>
        </div>
    )
}

export default CustomHook