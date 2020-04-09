import React from 'react'
import classes from './btn.module.css'

export default props => {
    return(
    <button className={classes[props.type]} onClick={props.onClick} disabled={(props.disabled)?true:false}>
        <p>{props.value}</p>
    </button>
    )
}