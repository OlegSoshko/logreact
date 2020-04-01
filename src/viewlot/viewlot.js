import React, { Component } from 'react';
import classes from './viewlot.module.css'
import {connect} from 'react-redux'

import Header from './Componetn/header/header'
import Body from './Componetn/body/body'
import Main from './Componetn/body/main/main'
import Nav from './Componetn/body/nav/nav'
import Backdrop from '../UI/Backdrop/Backdrop'

class ViewLot extends Component{
  render(){
    return(
      <React.Fragment>
        <div className={classes.viewlot}>
          <Header 
            lot = {this.props.lot.id}
            bet = {this.props.lot.bet}
            step = {this.props.lot.step}
            countBet = {this.props.lot.countBet}
            onClose = {this.props.onClose}
            onButtonClick={this.props.onButtonClickHandler}
          />
          <Body>
              <Main 
                startDate={this.props.lot.startDate}
                endDate={this.props.lot.endDate}
                route = {this.props.lot.route}
                organizer={this.props.lot.organizer}
              />
              <Nav/>
          </Body>
        </div>
        <Backdrop onClick={this.props.onClose}/>
      </React.Fragment>
    )
  }
}

export default connect()(ViewLot)
