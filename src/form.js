import React from 'react';
// import React, { Component } from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    this.setState ({input: e.target.value})
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <div>
    <h1> Let's see if the form works </h1>
    <form onSubmit={this.handleSubmit}>
     <input type="text" value={this.state.value} onChange={this.handleChange}/>
     </form>
     <input type="submit" />
     <p> {this.state.input} </p>
      </div>
    );
  }

}

export default Form;
