import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../ActionCreators'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        dispatchIncrement: PropTypes.func
    }

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        );
    }

    handleIncrement = () => {
        const {dispatchIncrement} = this.props
        dispatchIncrement()
    }
}

function mapStateToProps(state){
    return {
        counter: state.count
    }
}

const mapDispatchToProps = {
        dispatchIncrement:increment
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)