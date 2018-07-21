import React, { Component } from 'react';

import Header from './header';
import AlbumList from './album_list'

const REQ_URL = 'http://localhost:6789/artists';

class Artist extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            artist:''
        }
    }

    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.artistId}`,{
            method:'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                artist:json
            })
        }
        )
    }
    render(){
        return(
            <div>
                <Header></Header>
                <div className="artist_bio">
                    <div className="artist_image">
                       <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}>
                       </span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumList albumList={this.state.artist.albums}></AlbumList>
                </div>
            </div>
        )
    }
}

export default Artist;