import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MoviesList extends Component {

  componentWillMount(){
    this.props.moviesList()
  }

  renderMovies = (movies) =>{
    if(movies)
      return movies.map((movies) => {
        return (
          <div>{movies.name}</div>
        )
      })
  }
  render() {
    return (
      <div>
       {this.renderMovies(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  console.log("inside map state to props");
  return{
    movies:state.movies // setting the movies data in "movies" state 
  }
}

export default connect(mapStateToProps, actions)(MoviesList);
