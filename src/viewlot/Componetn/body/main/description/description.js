import React from 'react'
import classes from './description.module.css'

export default props => {
    return(
        <div className={classes.description}>
            <span>{props.title}</span>
            <span style={props.style}>{props.value}</span>
        </div>
    )
}