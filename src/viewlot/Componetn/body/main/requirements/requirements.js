import React from 'react'
import classes from './requirements.module.css'

import Item from './item/item'

export default props => {
    return(
        <div className={classes.Requirements}>
            <Item 
                text = 'Документ'
                value = 'Рейс'
            />
            <Item 
                hint = 'Тестовый текст отображения подсказки'
                text = 'Медицинская книжка'
                value = 'Рейс 1'
            />
            <Item 
                hint = 'Тестовый текст отображения подсказки'
                text = 'Наличие Carnet TIR'
                value = 'Все рейсы'
            />
        </div>
    )
}