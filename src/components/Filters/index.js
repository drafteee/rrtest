import React, { Component } from 'react';
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './SelectFilter'

class Filters extends Component {
    render() {
        return (
            <div>
                <SelectFilter/>
                <DateRange />
            </div>
        );
    }
}

export default Filters;