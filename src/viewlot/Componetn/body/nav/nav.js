import React, { Component } from 'react'
import classes from './nav.module.css'

import NavItem from './navItem/navItem'

class Nav extends Component
{
    constructor(props){
        super(props);
        this.state = {
            active: 1,
            navItems: [
                {title: 'Транспорт', id: 1},
                {title: 'Требования', id: 2},
                {title: 'Рейсы', id: 3},
            ]
        }
        this.onNavClickHendler = this.onNavClickHendler.bind(this);
    }

    onNavClickHendler = (id) => {
        if(this.state.active !== id){
            this.setState({
                active: id
            })
        }
    }

    render(){
        return(
            <div className={classes.nav}>
                {this.state.navItems.map((item,index)=>{
                    return(
                        <NavItem 
                            key={index} 
                            value={item} 
                            onNavClick={() => this.onNavClickHendler(item.id)}
                            active = {this.state.active}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Nav
