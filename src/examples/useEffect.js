import React, {useState, useEffect} from "react";

const styles = {
    button: {
        marginRight: "5px",
    },
    div: {
        margin: '10px auto',
        width: '500px',
    }
}

function UseEffectComponent() {
    const [type, setType] = useState('users')
    const [data, setData] =useState([])
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    // Если вызывать таким образом (непередавая вторым аргументом массив зависимостей), то он будет вызываться каждый раз при рендеринге страницы. Базовое использование useEffect для отслеживания рендеринга компонента 
    // console.log('Component render')
    // useEffect(() => {
        
    //     console.log('render')
    // })
    // Вторая часто используемая конструкция, когда передаем вторым параметром массив зависимостей. Проще говоря от чего будет зависить данный useEffect
    // useEffect(() => {
    //     console.log('Type change', type)
    // }, [type])
    // Применение данной конструкции с асинхронностью
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}?_limit=3`)
            .then(response => response.json())
            .then(json => setData(json))
        // Продемонстрировать очистку можем здесь
        return () => {
            console.log('Clean type')
        }
    }, [type])
    // useEffect служит для определенных side эффектов, мы можем за чем-то наблюдать и выполнять какое-то действие 

    // Эмуляция некоторых life cycle хуков
    // Например, мы можем сэмулировать тот момент, когда компонент полностью зарендерился и готов к работе

    // Еще фишки в useEffect
    // Задача. При любом перемещении мыши мы изменяли координаты
    // Заведем state pos
    // Отслеживаем позицию курсора на странице
    // Есть проблема. Любые слушатели, которые мы добавляем их нужно удалять
    // useEffect(() => {
    //     console.log('ComponentDidMount')
    //     window.addEventListener('mousemove', event => {
    //         setPos({
    //             x: event.clientX,
    //             y: event.clientY
    //         })
    //     })
    // }, [])
    // перепишем useEffect 

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        console.log('ComponentDidMount')
        window.addEventListener('mousemove', mouseMoveHandler)

        // Теперь мы можем написать функцию, которая будет очищать слушателя, тогда когда будет заканчиваться действие этого эффекта
        return () => {
            // Мы не увидим работы данной функции, т.к. она выведется лишь в случае, когда компонент будет удаляться
            window.removeEventListener('mousemove', mouseMoveHandler)
            // Таким образом, можно делать отписки, удалять слушателей и т.д.
        }
    }, [])




    return (
        <div style={styles.div}>
            <h1>Ресурс: {type}</h1>
            <button className="btn btn-warning" style={styles.button} onClick={() => setType('users')}>Пользователи</button>
            <button className="btn btn-warning" style={styles.button} onClick={() => setType('todos')}>Todo</button>
            <button className="btn btn-warning" style={styles.button} onClick={() => setType('posts')}>Посты</button>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}

export default UseEffectComponent