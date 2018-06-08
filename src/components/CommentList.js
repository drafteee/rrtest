import React from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

function CommentList({comments = [],isOpen,toggleOpen}){
   
    const text = isOpen ? 'hide comments' : 'open comments'

    return(
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({comments,isOpen})}
        </div>
    )
} 

CommentList.propTypes ={
    comments:PropTypes.array,
    //from toggleOpen decorator
    isOpen:PropTypes.bool,
    toggleOpen:PropTypes.func
}

function getBody({comments = [],isOpen}){

    if(!isOpen) return null

    if(!comments.length) return <p>No comments</p>

    return(
        <ul>
            {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
        </ul>
    )
}


export default toggleOpen(CommentList)