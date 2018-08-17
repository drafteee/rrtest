import React,{Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filtrateArticlesSelector} from '../selectors'
import {loadArticles} from '../ActionCreators'
import Loader from './Loader'

class ArticleList extends Component{
    
        static propTypes ={
            //from connect
            articles:PropTypes.array.isRequired,
            //from accordion
            openItemId:PropTypes.string,
            toggleOpenItem:PropTypes.func.isRequired
        }
        
        componentDidMount(){
            const {loading, loaded} = this.props
            if(!loaded || !loading)
                this.props.loadArticles()
        }
        render(){
            const {articles, openItemId, toggleOpenItem, loading} = this.props
            //console.log(articles)

            if(loading) return <Loader/>
            const articlesElements = this.props.articles.map((article) =>  
            <li key={article.id} /*onClick = {toggleOpenItem(article.id)}*/>
                <Article article={article} isOpen={article.id === openItemId} toggleOpen={toggleOpenItem(article.id)}/*удалить(урок 3)*//>
            </li>
        )
        return(
            <ul>
                {articlesElements}
            </ul>
        )
    }
}

export default connect((state) => {
    return{
        articles:filtrateArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
},{loadArticles})(accordion(ArticleList))