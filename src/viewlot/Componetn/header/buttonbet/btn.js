import React from 'react'
import classes from './btn.module.css'

export default props => {
    return(
    <button className={classes[props.type]} onClick={props.onClick}>
        <p>{props.value}</p>
    </button>
    )
}