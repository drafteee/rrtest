import React from 'react';
import Article from './Article';

export default function ArticleList({articles}){
    const articlesElements = articles.map((article) =>  
        <li key={article.id}><Article article={article}/></li>
    )

    return(
        <ul>
            {articlesElements}
        </ul>
    )
}