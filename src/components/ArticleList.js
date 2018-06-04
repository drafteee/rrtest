import React,{Component} from 'react';
import Article from './Article';

export default class ArticleList extends Component{
    
        state = {
            openArticleId:null
        }
        render(){
            const articlesElements = this.props.articles.map((article) =>  
            <li key={article.id}>
                <Article article={article} isOpen={article.id === this.state.openArticleId} toggleOpen={this.toggleOpenArticle(article.id)}/>
            </li>
        )
        return(
            <ul>
                {articlesElements}
            </ul>
        )
    }
    
    toggleOpenArticle = (openArticleId) => ev => {
        this.setState({openArticleId}) 
    }

}