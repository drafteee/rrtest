import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    state = {
        selected: []
    }
    changeSelection = selected => this.setState({selected})

    render() {

        const {selected} = this.state
        const {articles} = this.props
        const options = this.props.articles.map(article =>({
            label: article.title,
            value: article.id
        }))

        return (
                <Select options={options} value={this.state.selected} onChange={this.changeSelection} multi={true}/>

        );
    }
}

export default SelectFilter;