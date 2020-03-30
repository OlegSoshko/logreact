import React from 'react'
import classes from './navItem.module.css'

import SVG from './SVG'

export default props => {
    const cls = [classes.navItem]
    const a = '#'+props.value.title
    if(props.active === props.value.id)
    {
        cls.push(classes.active);
    }
    return(
        <a href={a}>
            <div className={cls.join(' ')} onClick={() => props.onNavClick()}>
                <SVG name={props.value.title}/>
                <span>{props.value.title}</span>
            </div>
        </a>
    )
}