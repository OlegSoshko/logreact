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
        bet: 25000,
        step: 25000,
        countBet: 0,
        startDate: {day: '1 дек', time: '12:25-13:35'},
        endDate: {day: '2 дек', time: '14:25-16:35'},
        organizer: 'ООО ТК "ДИЗЕЛЬ"',
        route: [
          {date: {day: '1 дек', time: '12:25-13:35'}, address: {country: 'Россия', city: 'Иваново', region: 'Ивановская обл.', street: 'ул.Черниковых', home: '30'}},
          {date: {day: '2 дек', time: '14:25-16:35'}, address: {country: 'Россия', city: 'Калуга', region: 'Ивановская обл.', street: 'тер-я Машзавода', home: 'стр. 1'}}
        ],
    }

    this.onButtonClickHandler = this.onButtonClickHandler.bind(this)
  }

  onButtonClickHandler = () => {
    const bet = this.state.bet + this.state.step
    const count = this.state.countBet + 1
    this.setState({
      bet: bet,
      countBet: count
    })
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
          onButtonClick={this.onButtonClickHandler}
        />
        <Body>
            <Main 
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              route = {this.state.route}
              organizer={this.state.organizer}
            />
            <Nav/>
        </Body>
      </div>
    )
  }
}

export default Viewlot
