import React, { Component } from 'react';
import classes from './viewlot.module.css'

import Header from './Componetn/header/header'
import Body from './Componetn/body/body'
import Main from './Componetn/body/main/main'
import Nav from './Componetn/body/nav/nav'

class Viewlot extends Component{

  constructor(props){
    super(props)
    
    this.state = {
        lot: 345643756,
        bet: '400 000',
        step: '25000,0',
        countBet: '54',
        startDate: {day: '1 дек', time: '12:25-13:35'},
        endDate: {day: '2 дек', time: '14:25-16:35'},
        organizer: 'ООО ТК "ДИЗЕЛЬ"',
    }
  }

  render(){
    return(
      <div className={classes.viewlot}>
        <Header 
          lot={this.state.lot}
          bet = {this.state.bet}
          step = {this.state.step}
          countBet = {this.state.countBet}
          onClose = {this.props.onClose}
        />
        <Body>
            <Main 
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              organizer={this.state.organizer}
            />
            <Nav />
        </Body>
        <p style={{marginTop: 100}}>Hello world!</p>
      </div>
    )
  }
}

export default Viewlot
