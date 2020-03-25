import React from 'react'
import classes from './main.module.css'

import Description from './description/description'
import CardList from './cardList/cardList'
import Requirements from './requirements/requirements'

export default props => {
    const startDate = props.startDate.day+','+props.startDate.time
    const endDate = props.endDate.day+','+props.endDate.time

    return(
        <div className={classes.main}>
            <Description 
                type='default'
                title='Начало перевозки' 
                value={startDate}/>
            <Description 
                type='default'
                title='Конец перевозки' 
                value={endDate}/>
            <Description 
                type='organizer'
                title='Организатор' 
                value={props.organizer}/>
            <h3>Транспорт</h3>
            <CardList />
            <h3>Требования к рейсам</h3>
            <Requirements></Requirements>
            <h3>Рейсы</h3>
        </div>
    )
}