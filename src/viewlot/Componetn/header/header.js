import React from 'react'
import classes from './header.module.css'

import Button from './buttonbet/btn'
import Head from './HeadSCbT/headscbt'
import Close from './Close/close'

export default (props) => {
    const numberLot = 'Перевозка № ' + props.lot;
    const bet = 'Поставить ' + props.bet + ' ₽';
    return(
        <header>
            <div className={classes.title}>
                <span>{numberLot}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 10.6666V15.9999H4V5.33325H9.33333" stroke="#2BC744" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.3335 4H16.0002M16.0002 4V8.66667M16.0002 4L9.3335 10.6667" stroke="#2BC744" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={classes.headscbt}>
                <Head text='Статус' value='timer'/>
                <Head text='Ставок' value={props.countBet}/>
                <Head text='Шаг' value={props.step}/>
            </div>
            <Button value={bet}/>
            <Close onClick={props.onClose}/>
        </header>
    )
}