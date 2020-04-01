import React, { Component } from 'react'
import classes from './wrapper.module.css'

import Button from '../UI/Button/btn'
import ViewLotContainer from '../viewlot/ViewLotContainer'
import {connect} from 'react-redux'
import {Visible} from '../store/ViewLot/actions/ViewLotActions'

class Wrapper extends Component
{
    render(){
        return(
            <div className={classes.wrapper}>
                {this.props.visible ? <ViewLotContainer/> : <Button value='Открыть' type='btn-green' onClick={this.props.onVisible}/>}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        visible: state.visible
    }
}
function mapDispatchToProps(dispatch){
    return{
        onVisible: () => dispatch(Visible()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Wrapper)
