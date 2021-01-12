import React, { Component } from 'react';
import './Blog.css';
import Test from './Test/Test'


class Blog extends Component{
  state ={
    persons:[
      {name: 'Anthony', age: 42},
      {name: 'Bean', age: 32},
      {name: 'Carl', age: 22}
    ]
  }

  checkIfHasInfo = (newName) =>{
    console.log('clicked');
    this.setState({
      persons:[
        {name: newName, age: 142},
        {name: 'Bean 2', age: 130},
        {name: 'Carl 2', age: 100}
      ]
    })
  }

  changeTheName = (event) => {
    this.setState({
      persons:[
        {name: 'Max', age: 142},
        {name: event.target.value, age: 130},
        {name: 'Carl 2', age: 100}
      ]      
    })
  }

  render(){
    return (
      <div className="blogMain">
        <h1>Teste</h1>
        <Test name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        
        <Test changee={this.changeTheName}
          name={this.state.persons[1].name} age={this.state.persons[1].age}>
            Inside Component + event target from Component
        </Test>

        <Test name={this.state.persons[2].name} age={this.state.persons[2].age}
          click={this.checkIfHasInfo.bind(this,'Maxxx!!! by CLICK P')}
          >Here pass mehtod between Component</Test>

        <button onClick={this.checkIfHasInfo.bind(this,'Maxxx!!! by btn')}>Change to list!</button>
      </div>
    );
  }
}


export default Blog;
