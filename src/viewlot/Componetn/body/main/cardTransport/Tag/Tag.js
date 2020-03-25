import React from 'react'
import classes from './Tag.module.css'

export default props => {
    return(
        <div className={classes.Tag}>
            <small>{props.text}</small>
        </div>
    )
}