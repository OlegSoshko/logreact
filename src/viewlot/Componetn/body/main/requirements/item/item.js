import React from 'react'
import classes from './item.module.css'
import 'antd/dist/antd.css';

import Help from '../../../../../../UI/Help/Help'

export default props => {
   return(
       <div className={classes.Item}>
            <span>
                <span>{props.text}</span>
                {props.hint 
                ? <Help hint ={props.hint}/> 
                : ''}
            </span>
            <span>{props.value}</span>
       </div>
   )
}