import { useState, useEffect } from 'react';
import axios from 'axios';
import EntertainmentStories from '../components/EntertainmentStories';


const Entertainment = () => {

    const [news, setNews] = useState([])

    const apiKey = '8c1f3ab3394248629bec933c893a511e'
  
    useEffect(() => {
      async function getNews() {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=8c1f3ab3394248629bec933c893a511e`)
        console.log(response.data.articles)
        setNews(response.data.articles)
      }
      getNews()
    }, [])
    
    
    return (
      <div className="entertainment-positioning">
        {news.map((newspiece, i) => (
        i <= 8 ? <EntertainmentStories key={news[i]} {...newspiece}/> : false
        ))}
      </div>
    )

}

export default Entertainment