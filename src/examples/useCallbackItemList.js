import React, { useState, useEffect } from "react";

export default function ItemsList({ getItems }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems(42)
        setItems(newItems)
        // Проследим сколько раз у нас вызывается useEffect
        console.log('render')
        // Всплывает проблема перерендеривания компонента даже при изменении не задействованного в данном компоненте state colored
    }, [getItems]);

    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    )
}