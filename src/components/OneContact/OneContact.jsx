import { Component } from 'react';
import { OneContactDeleteButton } from './OneContact.styled';

export class OneContact extends Component {
  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <li>
        <p>{name}:</p>
        <p>{number}</p>
        <OneContactDeleteButton type="button" onClick={() => deleteContact(id)}>
          Delete contact
        </OneContactDeleteButton>
      </li>
    );
  }
}
