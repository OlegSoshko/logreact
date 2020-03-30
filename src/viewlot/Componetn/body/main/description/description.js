import React from 'react'
import classes from './description.module.css'

export default props => {
    const style = [classes.description, classes[props.type]]
    return(
        <div className={style.join(' ')}>
            <span>{props.title}</span>
            <span>{
                props.href ? 
                <a href={props.href}>{props.value}</a> : 
                props.value
            }</span>
        </div>
    )
}