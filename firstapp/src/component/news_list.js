import React from 'react';
import NewsItem from './news_item';

const newsList = (props) =>{

    const items = props.news.map((item)=>{
        return(
            <NewsItem item={item} key={item.id}/>
        )
    })


    console.log("getting in props"+props)
    return(
        <div>
            {items}
        </div>
    )
}

export default newsList;