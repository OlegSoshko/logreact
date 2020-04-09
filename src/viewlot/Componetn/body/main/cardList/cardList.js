import React from 'react'
import classes from './cardList.module.css'

import Card from '../cardTransport/cardTransport'

export default props =>
{
    return(
        <div className={classes.CardList}>

                <Card 
                    type='Мультирежим рефрижератор'
                    tonnage='25 т'
                    volume='20 м³'
                    temp='от -10 до +5'
                    trip='1, 2'
                />
                <Card 
                    type='Мультирежим рефрижератор'
                    tonnage='25 т'
                    volume='20 м³'
                    temp='от -10 до +5'
                    trip='3, 4'
                />
                <Card 
                    type='Мультирежим рефрижератор'
                    tonnage='25 т'
                    volume='20 м³'
                    temp='от -10 до +5'
                    trip='3, 4'
                />
                                <Card 
                    type='Мультирежим рефрижератор'
                    tonnage='25 т'
                    volume='20 м³'
                    temp='от -10 до +5'
                    trip='3, 4'
                />

        </div>
    )
}