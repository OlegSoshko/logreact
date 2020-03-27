import React from 'react'
import classes from './main.module.css'

import Description from './description/description'
import CardList from './cardList/cardList'
import Requirements from './requirements/requirements'
import Trip from './trip/Trip'

export default props => {
    const startDate = props.route[0].date.day+', '+props.route[0].date.time
    const endDate = props.route[1].date.day+', '+props.route[1].date.time

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
            <Trip 
                startDate = {props.startDate}
                endDate = {props.endDate}
                address = {props.address}
                route = {props.route}
            />
        </div>
    )
}