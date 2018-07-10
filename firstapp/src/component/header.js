import React, {Component} from 'react';

/*const Header = () =>{
    return <h2>Header</h2>
}*/
 
class Header extends Component{

    constructor(props){
        super(props)

        this.state={
            keywords:'JOHN',
            title:"This is user search"
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({keywords:event.target.value})
    }
    render(){
        return(
            <header>
                <h1>FirstApp</h1>
                <div className="logo"
                onClick={()=>console.log('clicked')}> Logo</div>
                <input onChange={this.inputChange.bind(this)} />
                <p>{this.state.title}</p>
                <p>{this.state.keywords}</p>
            </header>
        )
    }
}

export default Header;