import React from 'react'
import classes from './timer.module.css'

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
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.65264 5.14026C9.30499 5.5278 9.30499 6.4722 8.65264 6.85974L1.51063 11.1025C0.844039 11.4985 -0.000107298 11.0181 -0.000107264 10.2428L-0.000106889 1.75721C-0.000106855 0.981867 0.844041 0.501476 1.51063 0.897471L8.65264 5.14026Z" fill="#2BC744"/>
            </svg>
            {this.state.time.min + ':' + this.state.time.sec}</span>
        )
    }
}

export default Timer