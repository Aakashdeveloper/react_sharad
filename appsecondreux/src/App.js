import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

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
  return{
    movies:state.movies
  }
}

export default connect(mapStateToProps, actions)(App);
