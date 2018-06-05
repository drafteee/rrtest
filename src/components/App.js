import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ArtcileList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'

class App extends Component {

    

    render() {
        return (
            <div>
                <UserForm/>
                <ArtcileList articles={this.props.articles} />
                <ArticlesChart articles={this.props.articles} />
            </div>
        );
    }

    
}

export default App;