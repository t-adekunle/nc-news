import axios from 'axios'

const newsApi = axios.create({
    baseURL:'https://news-project-r24g.onrender.com/api'})

export const fetchArticles = () => {
    return newsApi
    .get('/articles')
    .then((response) => {
         return response.data.articles
    })
}

export const fetchArticle = (article_id) => {
    
    return newsApi 
    .get(`/articles/${article_id}`)
    .then((response)=>{
        console.log(response.data, 'in Api')
       return response.data.article
    })
}
