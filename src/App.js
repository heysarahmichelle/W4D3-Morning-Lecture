import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
        toggleDropdown: false
    }
  }
  handleToggle = () =>{
    this.setState({
      toggleDropdown: !this.state.toggleDropdown
    })
  }
  render(){

    return (
      <div className="App">
        <header className="main-header">
          <img src='https://res.cloudinary.com/wnotw/images/c_limit,w_1536,q_auto:best,f_auto/v1505506714/n4t8jmoi4arabka4fwk8/hearth-hand-with-magnolia-at-target-logo' height='125px' className="header-logo"/>
            {this.state.toggleDropdown
              ? (
                <>
                <span onClick={this.handleToggle} className="dropdown-toggle">x</span>
                <nav className="mobile-links">
                  <p>Kitchen</p>
                  <p>Lighting</p>
                  <p>Furniture</p>
                  <p></p>
                </nav>
                </>
              ) 
              : (
                <span onClick={this.handleToggle} className="dropdown-toggle">x</span>
              )
            
            }
          <nav className="header-links">
            <span>Home</span>
            <span>Contact</span>
            <span>About</span>
          </nav>
        </header>
      </div>
    )
}
}

export default App;
