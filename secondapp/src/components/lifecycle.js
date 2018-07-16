//GET DEFAULT STATE
//SET INITIAL STATE
//BEFORE GET CREATED
//RENDER JSX
//AFTER COMPONENT IS MOUNTED
import React, {Component} from 'react';

class Lifecycle extends Component{
    //GET DEFAULT STATE
    constructor(props){
        super(props)

        //SET INITIAL STATE
        this.state={
            title:'I am working on component'
        }
    }

    //BEFORE GET CREATED
    componentWillMount(){
        console.log("before component mounted")
       
    }

    componentWillUpdate(){
        console.log("Before Update")
    }

    componentDidUpdate(){
        console.log("after update")
    }

    //Render JSX
    render(){
        return(
            <div>
                <h4>{this.state.title}</h4>
                <div onClick={()=>this.setState({title:"something change"})}>
                    click to change
                </div>
            </div>
        )
    }

    //AFTER COMPONENT IS MOUNTED
    componentDidMount(){
        console.log("after component mounted")
        document.querySelector('h4').style.color="green"
    }

    componentWillUnmount(){
        alert("you want to leave")
    }
}

export default Lifecycle;
