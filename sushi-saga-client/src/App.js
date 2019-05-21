import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state = {
    allSushi: [],
    eaten: [],
    account: 100,
    start: 0,
    end: 4
  }

  componentDidMount() {
    this.getSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  
            allSushi={this.state.allSushi} 
            handleEat={this.handleEat} 
            eaten={this.state.eaten}
            start={this.state.start}
            end={this.state.end}
            handleMore={this.handleMore}/>
        <Table eaten={this.state.eaten} account={this.state.account}/>
      </div>
    );
  }

  getSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(allSushi => {
      this.setState({
        allSushi
      }, () => console.log('this is state', this.state.allSushi))
    })
  }

  handleEat = (price, id) => {
    console.log(id);
    if (price <= this.state.account && !this.state.eaten.includes(id)) {
      this.setState(prevState => {
        return {eaten: [...prevState.eaten, id],
                account: prevState.account-price}
      }, () => console.log(this.state.eaten))
    }
  }

  handleMore = () => {
    console.log('gimme more!!');
    this.setState(prevState => {
      return {start: prevState.start+4,
              end: prevState.end+4}
    })
  }

} //end of class

export default App;