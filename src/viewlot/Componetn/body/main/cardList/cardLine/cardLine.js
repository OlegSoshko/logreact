import React from 'react'
import classes from './cardLine.module.css'

export default props =>
{
    return(
        <div className={classes.CardLine}>
            {props.children}
        </div>
    )
}