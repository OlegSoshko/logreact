import React from 'react'
import classes from './navItem.module.css'

export default props => {
    return(
        <div className={classes.navItem}>
            {props.icon}
            <span>{props.value}</span>
        </div>
    )
}