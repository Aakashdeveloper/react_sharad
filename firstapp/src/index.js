import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './component/header';
import JSON from './db.json';
import NewsList from './component/news_list'


class App extends Component{
    constructor(props){
        super(props);

        this.state ={
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <hr/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

/*const App = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <h1>This is first app</h1>
        </div>
    )

}
*/
ReactDOM.render(<App/>, document.getElementById('root'));