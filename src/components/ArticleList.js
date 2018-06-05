import React,{Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

class ArticleList extends Component{
    
        static propTypes ={
            articles:PropTypes.array.isRequired,
            //from accordion
            openItemId:PropTypes.string,
            toggleOpenItem:PropTypes.func.isRequired
        }
        
        render(){
            const {articles, openItemId, toggleOpenItem} = this.props
            const articlesElements = this.props.articles.map((article) =>  
            <li key={article.id}>
                <Article article={article} isOpen={article.id === openItemId} toggleOpen={toggleOpenItem(article.id)}/>
            </li>
        )
        return(
            <ul>
                {articlesElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)