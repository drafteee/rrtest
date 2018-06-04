import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ArtcileList from './ArticleList'
import ArticlesChart from './ArticlesChart'

class App extends Component {
    render() {
        return (
            <div>
                <ArtcileList articles={this.props.articles} />
                <ArticlesChart articles={this.props.articles} />
            </div>
        );
    }
}

export default App;