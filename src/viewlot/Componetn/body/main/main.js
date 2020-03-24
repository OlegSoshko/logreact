import React from 'react'
import classes from './main.module.css'

import Description from './description/description'
import Card from './cardTransport/cardTransport'

export default props => {
    const startDate = props.startDate.day+','+props.startDate.time
    const endDate = props.endDate.day+','+props.endDate.time
    const style = {color: 'green'};

    return(
        <div className={classes.main}>
            <Description title='Начало перевозки' value={startDate}/>
            <Description title='Конец перевозки' value={endDate}/>
            <Description 
                style={style}
                title='Организатор' 
                value={props.organizer}/>
            <h3>Транспорт</h3>
            <Card />
        </div>
    )
}