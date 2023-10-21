import { nanoid } from 'nanoid';
import { Component } from 'react';
import Notiflix from 'notiflix';

export class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  id = nanoid();

  handleOnChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleOnClick = () => {
    const { number } = this.state;
    if (!parseInt(number)) {
      Notiflix.Notify.warning('Please, enter numbers for the phone form');
      return;
    }
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor={this.id}>Name</label>
          <input
            type="text"
            value={name}
            name="name"
            id={this.id}
            onChange={this.handleOnChangeInput}
            required
          />
          <label htmlFor={this.id}>Number</label>
          <input
            type="tel"
            value={number}
            name="number"
            id={this.id}
            onChange={this.handleOnChangeInput}
            required
          />
          <button
            type="button"
            onClick={this.handleOnClick}
            disabled={!name || !name.trim() || !number || !number.trim()}
          >
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
