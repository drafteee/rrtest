import {normalizedComments as comments} from '../fixtures'
import {} from '../constants'

const commentsMap = comments.reduce((acc,comment)=>{
    acc[comment.id] = comment
    return acc
}, {})

export default (commentState = commentsMap, action) => {
    
    const {type, payload} = action

    switch (type) {

    }

    return commentState
}