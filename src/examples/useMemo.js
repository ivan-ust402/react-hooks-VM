import React, {useState, useMemo, useEffect} from "react";

function complexCompute(num) {
    console.log('Complex compute')
    let i = 0
    while(i < 2000000000) i++
    return num * 2
}

function UseMemoComponent() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    // Предположим, что мы получаем значение после долгих и сложных вычислений. Нам нужно оптимизировать приложение и избавиться от лишних вычислений 

    // Проблема в том, что при смене цвета заголовка все равно при рендере у нас повторно происходит сложное вычисление computed.
    // Решение: использовать useMemo, который кэширует сложное значение
    
    // const styles = {
    //     color: colored ? 'yellowgreen' : 'silver',
    // }

    // Кэшируем объект
    // const styles = useMemo(() => {
    //     return {
    //         color: colored ? 'yellowgreen' : 'silver',
    //     }
    // }, [colored])

    // Более лаконичный вариант
    const styles = useMemo(() => {
        return {
            color: colored ? 'yellowgreen' : 'silver',
        }
    }, [colored])

    // передаем первым аргументом callback, а вторым - массив зависимостей, при изменении которых будет вызываться callback 
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    // Еще одно применение useMemo - это работа с объектами
    // Проблема в том, что данный useEffect будет вызываться при работе любой кнопки, хотя стили меняются только при нажатии кнопки изменить цвет
    // Это происходит, потому что в JS объекты хранятся по ссылочной системе. При изменении state number вызывается render и объект style пересоздается по новой, а useEffect смотрит за старым объектом, он видит, что он изменился и поэтому вызывает данный callback

    // Стоит ли все помещать в useMemo? Ответ нет, все же это функция и она занимает некоторый объем памяти. С ним нужно быть аккуратным и вывывать его только в том случае когда это необходимо.

    useEffect(() => {
        console.log('styles changed')
    }, [styles])

    return (
        <>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button className="btn btn-success" style={{marginRight: '10px'}} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className="btn btn-danger" style={{marginRight: '10px'}} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить цвет</button>
        </>
    )
}

export default UseMemoComponent