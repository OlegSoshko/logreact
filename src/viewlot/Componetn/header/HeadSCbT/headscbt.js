import React from 'react'
import classes from './headscbt.module.css'
import Timer from './Timer/timer'

export default props => 
{
    return(
        <div className={classes.head}>
            <text>{props.text}</text>
            {
                (props.value === 'timer') ?  <Timer /> 
                : <span>{props.value}</span>
            }
        </div>
    )
}