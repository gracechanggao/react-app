import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



class BasicInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender:'',
      age: null,
      phone:'',
      email:'',
    };
  }
  formSubmition= (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  formValidation = (event) => {
    let nam = event.target.name;
    let gender = event.target.gender;
    let phone = event.target.phone;
    let email = event.target.email;
    let val = event.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.formSubmition}>
      <p>Enter your name:</p>
      <input
        type='text'
        name='name'
        onChange={this.formValidation}
      />

      <p>Enter your gender:</p>
       <input
        type='text'
        name='gender'
        onChange={this.formValidation}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.formValidation}
      />
      <p>Enter your phone:</p>
        <input
        type='text'
        name='phone'
        onChange={this.formValidation}
      />
       <p>Enter your email:</p>
        <input
        type='text'
        name='email'
        size="50"
        onChange={this.formValidation}
      />
       <p></p>
       <input
        type='submit'
      />
      <h1>Name:{this.state.name} Gender:{this.state.gender} Age:{this.state.age} Phone:{this.state.phone} Email:{this.state.email}</h1>

      </form>
    );
  }
}
ReactDOM.render(<BasicInfoForm />, document.getElementById('root'));

