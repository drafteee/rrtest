import React, {Component, PureComponent} from  'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle} from '../../ActionCreators'

class Article extends PureComponent{

    static propTypes ={
        article:PropTypes.shape({
            id:PropTypes.string.isRequired,
            title:PropTypes.string.isRequired,
            text:PropTypes.string.isRequired
        }).isRequired,
        isOpen:PropTypes.bool,
        toggleOpen:PropTypes.func
    }

    state = {
        updateIndex:0
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    render(){
        const {article, foo, isOpen, toggleOpen} = this.props
        console.log('update article');
        
        return(    
                <div ref = {this.setContainerRef}>
                    <h3>{article.title}</h3>
                    <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
                    <button onClick={this.handleDelete}>Delete me</button>
                    <ReactCSSTransitionGroup  transitionName = 'article' transitionEnterTimeout = {300} transitionLeaveTimeout = {500} transitionAppear={true} transitionAppearTimeout={500}>
                        {this.getBody()}
                    </ReactCSSTransitionGroup >
                </div>
        )
    }

    setContainerRef = ref =>{
        this.container = ref
        console.log(ref);
    } 

    handleDelete = () =>{
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log('delete article');
        
    }

    getBody(){
        const {article, foo,isOpen} = this.props
        
        if(!isOpen) return null
        
        
        return(
            <section>
                {article.text}
                <button onClick={()=>this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                <CommentList comments={article.comments} ref={this.setCommentsRef} key={this.state.updateIndex}/>
            </section>
        ) 
    }

    setCommentsRef = ref =>{
        console.log(ref);
        
    }
}

export default connect(null,{deleteArticle})(Article)