import React from 'react'
import classes from './timer.module.css'

import SVG from './svg'

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            time: {
                min: '10',
                sec: '00'
            }
        }
    }

    componentDidMount() {
        this.startTimer();
      }

    startTimer() {
        let time = this.state.time
        setInterval(() => {
            if(time.sec === '00' && time.min === '00'){
                return;
            }
            if(time.sec === '00' && time.min !== '00'){
                time.min = '0' + --time.min;
                time.sec = 60;
            }
            time.sec--;
            if(time.sec < 10){
                time.sec = '0' + time.sec;
            }
            this.setState({
                time: time,
            })
        }, 1000);
    }

    render() {
        return(
            <span className={classes.timer}>
                <SVG />
                {this.state.time.min + ':' + this.state.time.sec}
            </span>
        )
    }
}

export default Timer