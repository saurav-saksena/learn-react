import React, { useEffect, useState } from 'react'
import News from './News'

export default function NewsApi() {
    const [newsData, setNewsData] = useState([])
    const [word, setWord] = useState("general")
    const getApi = () => {
        fetch(`https://newsapi.org/v2/everything?q=${word}&apiKey=9b317c2bbce24ffcb9760b5bef98e860`)
            .then(res => res.json())
            .then(data => setNewsData(data.articles))
    }
    useEffect(() => {
        getApi()
    }, [word])
    const newsDetail = newsData.map((item, index) => {
        return (
            <News
                key={index}
                title={item.title}
                description={item.description}
                image={item.urlToImage}
            />
        )
    })
    return (
        <>
            <div className='white--ground'>
                <button className='api--button' onClick={() => setWord("general")}>All</button>
                <button className='api--button' onClick={() => setWord("hollywood")}>Hollywood</button>
                <button className='api--button' onClick={() => setWord("sport")}>Sports</button>
                <button className='api--button' onClick={() => setWord("health")}>Health</button>
                <button className='api--button' onClick={() => setWord("politics")}>Politics</button>
                <button className='api--button' onClick={() => setWord("science")}>Science</button>
                <button className='api--button' onClick={() => setWord("entertainment")}>Entertainment</button>
                <button className='api--button' onClick={() => setWord("fashion")}>Fashion</button>
                <button className='api--button' onClick={() => setWord("bollywood")}>Bollywood</button>
                <h2 className='news--title'>{word}</h2>
                <div className='api--div--container'>
                    {newsData.length ? newsDetail : <h1>Loading....</h1>}
                    {/* {newsDetail} */}
                </div>
            </div>
        </>
    )
}
