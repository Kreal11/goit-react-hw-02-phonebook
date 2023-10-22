import { Component } from 'react';

export class OneContact extends Component {
  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete contact
        </button>
      </li>
    );
  }
}
