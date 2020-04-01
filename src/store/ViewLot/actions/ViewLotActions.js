import {BUTTON_CLICK_HANDLER, CLOSE, VISIBLE, FETCH_LOT_ERROR, FETCH_LOT_SUCCESS} from './ViewLotActionType'

export function ButtonClickHandler(){
    return{
        type: BUTTON_CLICK_HANDLER,
    }
}
export function Close(){
    return{
        type: CLOSE,
    }
}
export function Visible(){
    return{
        type: VISIBLE,
    }
}


// export function FetchLot(){
//     return dispatch => {
//         try{
//             const response = temp()
//             dispatch(FetchLotSuccess(response))
//         }catch(error){
//             dispatch(FetchLotError(error))
//         }
//     }
// }

export function FetchLotSuccess(lot){
    return{
        type: FETCH_LOT_SUCCESS,
        lot: lot,
    }
}
export function FetchLotError(error){
    return{
        type: FETCH_LOT_ERROR,
        error: error
    }
}

//--------------------------------------//
export function temp(){
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
        visible: false,
    }
}