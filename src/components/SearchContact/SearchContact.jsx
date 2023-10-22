import { Component } from 'react';

export class SearchContacts extends Component {
  render() {
    const { changeFilter } = this.props;

    return (
      <div>
        <label htmlFor={crypto.randomUUID()}>Find Contacts by name</label>
        <input
          id={crypto.randomUUID()}
          type="text"
          name="name"
          //   value={name}
          onChange={changeFilter}
        />
      </div>
    );
  }
}
