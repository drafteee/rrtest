import {normalizedComments as comments} from '../fixtures'
import { ADD_COMMENT } from '../constants'
import {arrToMap} from '../helpers'

const commentsMap = arrToMap(comments)

export default (commentState = commentsMap, action) => {
    
    const {type, payload,randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return {...commentState,[randomId]:payload.comment}
    }

    return commentState
}