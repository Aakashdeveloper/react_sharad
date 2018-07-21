import React, { Component } from 'react';

import Banner from '../components/banner'
import ArtistList from '../components/artist_list';

const URL_ARTISTS = 'http://localhost:6789/artists';

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                artists:json
            })
        })

    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList allArtists = {this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home;