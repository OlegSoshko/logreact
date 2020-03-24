import React from 'react'
import classes from './body.module.css'

export default props => {
    return(
        <div className={classes.body}>
            {props.children}
        </div>
    )
}