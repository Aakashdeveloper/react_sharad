import React, {Component} from 'react';

/*const Header = () =>{
    return <h2>Header</h2>
}*/
 
class Header extends Component{
    render(){

        const styles = {
            sharad:{
                background:'skyblue'
            },
            aakash:{
                color:'red'
            }
        }
        return(
            <header style={styles.sharad}>
                <h1>FirstApp</h1>
                <div style={styles.aakash}> Logo</div>
                <input/>
            </header>
        )
    }
}

export default Header;