import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ArtcileList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Filters from '../components/Filters';
import Counter from "./Counter";
import store from '../store'
import {Provider} from 'react-redux'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Counter />
                    <UserForm/>
                    <Filters articles = {[]} />
                    <ArtcileList  />
                    {/* <ArticlesChart articles={this.props.articles} /> */}
                </div>
            </Provider>
        );
    }

}

export default App;