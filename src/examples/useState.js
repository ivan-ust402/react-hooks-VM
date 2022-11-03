import React from "react";

function UseStateComponent() {
    // Есть объект state в компоненте, описывающий состояния компонента,  и если он меняется, то реакт перерисовывает непосредственно ту область где этот state выводится 
    // В классовых компонентах следующая последовательность выполнения действий: создается this.setState({a: 1}) затем запускается зарисовка -> this.render()
    return (
        <div>

        </div>
    )
}

export default UseStateComponent