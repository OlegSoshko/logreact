import React from 'react'
import classes from './close.module.css'

export default props => {
    return(
        <div className={classes.close}>
        <svg onClick={props.onClick}  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10L20 20" stroke="#8F949B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 10L10 20" stroke="#8F949B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
    )
}