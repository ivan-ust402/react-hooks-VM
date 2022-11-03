import React, {useState} from "react";

// Есть объект state в компоненте, описывающий состояния компонента,  и если он меняется, то реакт перерисовывает непосредственно ту область где этот state выводится 
// В классовых компонентах следующая последовательность выполнения действий: создается this.setState({a: 1}), затем запускается зарисовка -> this.render()
// При переходе к функциональным компонентам(более легковестные, т.к. не нужно наследоваться от определенного класса) данный подход стал невозможен.
// Для обеспечения того же функционала, что и в классовых компонентах, в реакте были созданы изолированные функции, которые повторяли механизмы работы сущностей классовых компонентов
// Код становится более гибким и более масштабируемым
// Кортеж - массив с заранее определенными элементами

function UseStateComponent() {
    const [counter, setCounter] = useState(0)

    function increase() {
        setCounter(counter + 1)
    }

    function decrease() {
        setCounter(counter + 1)
    } 

    return (
        <div style={{width: '300px', margin: '100px auto 0'}}>
            <h1>Счетчик: {counter}</h1>
            <button className="btn btn-success" onClick={increase}>Добавить</button>
            <button className="btn btn-danger" onClick={decrease}>Убрать</button>
        </div>
    )
}

export default UseStateComponent