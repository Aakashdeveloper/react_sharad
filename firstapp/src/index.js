import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/header'

const App = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <h1>This is first app</h1>
        </div>
    )

}

ReactDOM.render(<App/>, document.getElementById('root'));