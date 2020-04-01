import {BUTTON_CLICK_HANDLER,CLOSE, VISIBLE, FETCH_LOT_SUCCESS, FETCH_LOT_ERROR} from '../actions/ViewLotActionType'

const initialState ={
    lot: null,
    // lot:{
    //     id: 345643756,
    //     bet: 25000,
    //     step: 25000,
    //     countBet: 0,
    //     startDate: {day: '1 дек', time: '12:25-13:35'},
    //     endDate: {day: '2 дек', time: '14:25-16:35'},
    //     organizer: 'ООО ТК "ДИЗЕЛЬ"',
    //     route: [
    //         {date: {day: '1 дек', time: '12:25-13:35'}, address: {country: 'Россия', city: 'Иваново', region: 'Ивановская обл.', street: 'ул.Черниковых', home: '30'}},
    //         {date: {day: '2 дек', time: '14:25-16:35'}, address: {country: 'Россия', city: 'Калуга', region: 'Ивановская обл.', street: 'тер-я Машзавода', home: 'стр. 1'}}
    //     ],
    // },
    visible: false,
    error: null,
}

export default function ViewLotReducer(state = initialState, action){

    switch(action.type){
        case BUTTON_CLICK_HANDLER:
            return {
                ...state,
                lot: {
                    ...state.lot,
                    bet: state.lot.bet + state.lot.step,
                    countBet: state.lot.countBet + 1,
                },
            };
        case CLOSE:
            return {
                ...state, 
                visible: false,
            };
        case VISIBLE:
            return{
                ...state, 
                visible: true,
            };
        case FETCH_LOT_SUCCESS:
            return{
                ...state, 
                lot: action.lot,
                visible: true
            };
        case FETCH_LOT_ERROR:
            return{
                ...state, 
                error: action.error
            };
        default:
            return state;
    }
}