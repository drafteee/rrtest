import React from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm';

function CommentList({article,isOpen,toggleOpen}){
   
    const text = isOpen ? 'hide comments' : 'open comments'

    return(
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({article,isOpen})}
        </div>
    )
} 

CommentList.propTypes ={
    comments:PropTypes.array,
    //from toggleOpen decorator
    isOpen:PropTypes.bool,
    toggleOpen:PropTypes.func
}

function getBody({article:{comments = [], id},isOpen}){

    if(!isOpen) return null
    if(!comments.length) 
    return(
        <div>
            <p>No comments</p>
            <CommentForm articleId={id}/>
        </div>
    )

    return(
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
            </ul>
            <CommentForm articleId={id}/>
        </div>
    )
}


export default toggleOpen(CommentList)