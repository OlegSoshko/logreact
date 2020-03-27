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
        route: [
          {date: {day: '1 дек', time: '12:25-13:35'}, address: {country: 'Россия', city: 'Иваново', region: 'Ивановская обл.', street: 'ул.Черниковых', home: '30'}},
          {date: {day: '2 дек', time: '14:25-16:35'}, address: {country: 'Россия', city: 'Калуга', region: 'Ивановская обл.', street: 'тер-я Машзавода', home: 'стр. 1'}}
        ],
    }

    this.onNavClickHendler = this.onNavClickHendler.bind(this)
  }

  onNavClickHendler = () => {
    console.log('nav item click')
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
              route = {this.state.route}
              organizer={this.state.organizer}
            />
            <Nav onNavClick={this.onNavClickHendler}/>
        </Body>
      </div>
    )
  }
}

export default Viewlot
