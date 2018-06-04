import React, { Component } from 'react';

class ArticlesChart extends Component {

    componentDidMount(){
        //d3 works with this.refs.chart

    }

    componentWillMount(){
        //do some cleanup
    }

    componentWillReceiveProps(nextProps){
        //update chart for new articles
    }

    render() {
        return (
            <div ref = 'chart' />
        );
    }
}

export default ArticlesChart;