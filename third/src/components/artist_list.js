import React, {Component} from 'react';
import { Link } from 'react-router-dom';


const ArtistList = (props) => {
    console.log(props)

    const list = ({allArtists}) => {
        if(allArtists){
            return allArtists.map((item)=>{

                const style = {
                    background:`url('/images/covers/jimi_hendrix.jpg')
                        no-repeat`
                }
                return(
                    <Link key={item.id} to={`/artist/${item.id}`}
                        className="artist_item" style={style}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }   
    }

    return(
        <div className="artists_list">
            <h4>Browse All Artist</h4>
            {list(props)}

        </div>
    )
}

export default ArtistList;

/*
var a = 10
var b = "my age is "+a

var c = 10
var d  = `my age is ${c}`
*/