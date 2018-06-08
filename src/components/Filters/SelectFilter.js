import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import {changeSelection} from '../../ActionCreators'

class SelectFilter extends Component {
    static propTypes = {
        articles:PropTypes.array.isRequired
    }
    handleChange = selected => this.props.changeSelection(selected.map(option=> option.value))

    render() {

        const {selected,articles} = this.props
        const options = articles.map(article =>({
            label: article.title,
            value: article.id
        }))

        return (
                <Select options={options} value={selected} onChange={this.handleChange} multi={true}/>

        );
    }
}

export default connect(state=>({
    selected: state.filters.selected,
    articles: state.articles
}),{changeSelection})(SelectFilter);