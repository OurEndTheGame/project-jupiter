import React, { useContext,useState, useEffect } from 'react'
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import styles from  './App.css'
import wiki from 'wikijs';
import axios from 'axios';


export const Main = () => {

    const apiKey = '491342efdc0a4402bbb0970fce9e5153'
    
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState(''); 
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, [query])
  
  
    const getData = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=491342efdc0a4402bbb0970fce9e5153`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
      }
      
     

    const updateSearch = e =>{
        setSearch(e.target.value);
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search.toLowerCase().replace(/\s+/g, ''));
    }

    return (
        <div className="App">
      <div className='title'><h1>Article Finder</h1></div>
      <form onSubmit = {getSearch}  className='search-form' >
        <label className='element-label'>Enter a topic: 
                <input className='search-bar' type='text' value={search} onChange={updateSearch}  />
                <button className='search-btn' type='submit'>Search</button>
        </label>
      </form>
    
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
      
      
      
    </div>
    )
}

export default Main;