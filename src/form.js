import React from 'react';
// import React, { Component } from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    this.setState ({value: e.target.value})
  }


  handleSubmit(event) {
     (this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//   render(){
//     return(
//       <div>
//     <h1> Let's see if the form works </h1>
//     <form onSubmit={this.handleSubmit}>
//      <input type="text" value={this.state.value} onChange={this.handleChange}/>
//      </form>
//      <button> Submit </button>
//      <h2> {this.state.value} </h2>
//       </div>
//     );
//   }
//
// }

export default Form;
