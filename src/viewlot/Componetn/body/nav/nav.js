import React from 'react'
import classes from './nav.module.css'

import NavItem from './navItem/navItem'

const nav = [
    'Транспорт',
    'Требования',
    'Рейсы'
]

export default props => {
    return(
        <div className={classes.nav}>
            {nav.map((name,index)=>{
                return(
                    <NavItem key={index} value={name} onNavClick={props.onNavClick}/>
                )
            })}
        </div>
    )
}
