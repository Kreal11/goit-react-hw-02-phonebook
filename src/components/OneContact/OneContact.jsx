import { Component } from 'react';

export class OneContact extends Component {
  render() {
    const { name, number } = this.props;
    return (
      <li>
        <p>{name}</p>
        <p>{number}</p>
      </li>
    );
  }
}
