import React, {useState, useEffect } from 'react';
import articleContent from './article-content';

const ArticlePage = ( { match }) => {

    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        setArticleInfo({ upvotes: Math.ceil(Math.random() * 10)});
    }, [name])

    if(!article) return <h1>Article does not exist!</h1>

    return (
    <React.Fragment>
        <h1>{article.title}</h1>
        <p>This post has been upvoted {articleInfo.upvotes} times</p>
        {article.content.map((paragraph, key) => (
            <p key = {key}>{paragraph}</p>
        ))}
    </React.Fragment>
    );
}

export default ArticlePage;