import React from 'react';
// import React, { Component } from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      messages: []
    }

  }

  handlesubmit(e) {
   e.preventDefault();
   this.setState ({input: e.target.value})
}

  render(){
    return(
      <div>
    <h1> Let's see if the form works </h1>
    <form onSubmit={this.handlesubmit.bind(this)}>
     <input type="text" placeholder="your name"/>
     </form>
     <button> Submit </button>

      </div>
    );
  }

}

export default Form;
