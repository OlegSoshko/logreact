import React, { Component } from 'react'
import {connect} from 'react-redux'


import ViewLot from './viewlot'
import {ButtonClickHandler, Close, FetchLotSuccess} from '../store/ViewLot/actions/ViewLotActions'

class ViewLotContainer extends Component
{
    temp(){
        return{
            id: 345643756,
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
    }

    componentDidMount() {
        this.props.FetchLotSuccess(this.temp())
    }
    render(){
        return(
            this.props.lot ? <ViewLot {...this.props}/> : null
        )
    }
}

function mapStateToProps(state){
    return {
        ...state,
    }
}

function mapDispatchToProps(dispatch){
    return{
        onButtonClickHandler: () => dispatch(ButtonClickHandler()),
        onClose: () => dispatch(Close()),
        FetchLotSuccess: lot => dispatch(FetchLotSuccess(lot)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewLotContainer)