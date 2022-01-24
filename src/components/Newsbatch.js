import React,{useEffect,useState} from 'react'
import Newsitem from './Newsitem.js'


function Newsbatch(props) {
    const [articles,setArticles]=useState([])
    const [page,setPage]=useState(1)

    const newsfetch= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey={apiKey}&page=${props.page}`
        let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles);
        }
        useEffect(() => {
            // Update the document title using the browser API
            newsfetch();
          });

          const fetchMoreData = async () => {   
            const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f169b0b15d144d698773e7e00f5fd5a";
            setPage(page+1) 
            let data = await fetch(url);
            let parsedData = await data.json()
            setArticles(articles.concat(parsedData.articles))
          };
          const fetchPreviousData = async () => {   
            const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f169b0b15d144d698773e7e00f5fd5a";
            setPage(page-1) 
            let data = await fetch(url);
            let parsedData = await data.json()
            setArticles(articles.concat(parsedData.articles))
          };
    return (
        <>
        <h1 className="text-center" style={{margin:"20px"}}>NewsMania - Top Headlines</h1>
       
            <div className="container" style={{marginTop:"30px"}}>
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-3" key={element.url} style={{height:"27rem"}} >
                        <Newsitem title={element.title?element.title.split(' ').slice(0,5).join(' '):' '} description={element.description?element.description.split(' ').slice(0,20).join(' '): ' '} imageurl={element.urlToImage}  />
                        <button type="button" className="btn btn-dark my-2">Read More</button>
                    </div>
                    
                })}
            </div>
            </div> 
            <div className='container'>
            <div class="d-flex justify-content-between">
            <button type="button" onClick={fetchMoreData} className="btn btn-primary my-2">&larr; Previous</button>
            <button type="button" onClick={fetchPreviousData}  className="btn btn-primary my-2">Next &rarr;</button>
            </div>
        </div>
    </>
    )
}

export default Newsbatch

