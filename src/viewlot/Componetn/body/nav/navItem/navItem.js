import React from 'react'
import classes from './navItem.module.css'

import SVG from './SVG'

export default props => {
    console.log(props.key)
    return(
        <div className={classes.navItem} onClick={() => props.onNavClick()}>
            <SVG name={props.value}/>
            <span>{props.value}</span>
        </div>
    )
}