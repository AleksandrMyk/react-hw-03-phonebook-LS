import React, { Component } from 'react';
import style from './ContactForm.module.css';

export default class App extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.contactForm} onSubmit={this.handleSubmit}>
        <label className={style.labelForm}>
          Name
          <br />
          <input
            className={style.contactInput}
            name="name"
            type="text"
            value={name}
            onChange={this.changeHandler}
          />
        </label>
        <label className={style.labelForm}>
          Number
          <br />
          <input
            className={style.contactInput}
            name="number"
            type="text"
            value={number}
            onChange={this.changeHandler}
          />
        </label>
        <button className={style.btnAdd} type="submit">
          Add {name}
        </button>
      </form>
    );
  }
}
