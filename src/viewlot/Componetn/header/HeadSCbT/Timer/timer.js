import React from 'react'
import classes from './timer.module.css'
import * as moment from 'moment'

import SVG from './svg'

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state = this.getState()
    }

    componentDidMount() {
        if(this.state.duration.seconds() > 0)
        {
            this.startTimer();
        }
    }

    getState(){
        const start = moment('2020-04-07T10:36:00Z');
        const end = moment('2020-04-07T10:45:00Z');
        const now = moment();
        let duration = null;
        let type = null;
        let time = null;
        if(now.isBefore(start)){
            duration = moment.duration(Math.abs(start.diff(now)))
            type = 'wait';
        }
        if(now.isBetween(start,end)){
            duration = moment.duration(Math.abs(end.diff(now)))
            type = 'play';
        }
        if(now.isAfter(end)){
            duration = moment.duration(0)
            type = 'end';
            time = 'завершён';
        }
        if(duration > 0){
            if(duration.days() === 0){
                time = duration.hours() + ':' + duration.minutes() + ':' + duration.seconds();
            }
            else{
                time = Math.trunc(duration.asDays()) + ' ' + duration.hours() + ':' + duration.minutes();
            }
        }
        return {duration: duration, type: type, time:time};
    }

    startTimer() {
        setInterval(() => {
            console.log(this.state)
            this.setState(this.getState())
        }, 1000);
    }

    render() {
        return(
            <span className={classes.timer}>
                <SVG />
                {this.state.time}
            </span>
        )
    }
}

export default Timer