import { OneContact } from 'components/OneContact/OneContact';
import { Component } from 'react';
import { StyledAllContactsUl } from './AllContacts.styled';

export class AllContacts extends Component {
  render() {
    const { deleteContact, dataContacts } = this.props;
    return (
      <StyledAllContactsUl>
        {dataContacts.map(contact => {
          return (
            <OneContact
              key={crypto.randomUUID()}
              {...contact}
              deleteContact={deleteContact}
              // dataSearchedContacts={dataSearchedContacts}
            />
          );
        })}
      </StyledAllContactsUl>
    );
  }
}
