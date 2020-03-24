import React, { Component } from 'react'
import Viewlot from '../viewlot/viewlot.js'
import classes from './wrapper.module.css'
import BtnBet from '../viewlot/Componetn/header/buttonbet/btn.js'

class Wrapper extends Component
{
    constructor(props){
        super(props)

        this.state = {
            visible: false,
        }

        this.handleChangeVisible = this.handleChangeVisible.bind(this)
    }

    handleChangeVisible = () =>{
        this.setState ({
            visible: !this.state.visible,
        })
    }

    render(){
        return(
            <div className={classes.wrapper}>
                {this.state.visible ? <Viewlot onClose={this.handleChangeVisible}/> : <BtnBet value='Открыть' onClick={this.handleChangeVisible}/>}
            </div>
        )
    }
}

export default Wrapper
