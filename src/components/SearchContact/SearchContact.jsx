import { Component } from 'react';
import {
  StyledSearchWrapper,
  StyledSearchLabel,
  StyledContactsHeader,
  StyledSearchInput,
} from './SearchContact.styled';

export class SearchContacts extends Component {
  render() {
    const { changeFilter } = this.props;

    return (
      <StyledSearchWrapper>
        <StyledContactsHeader>Contacts</StyledContactsHeader>
        <StyledSearchLabel htmlFor={crypto.randomUUID()}>
          Find contacts by name👇
        </StyledSearchLabel>
        <StyledSearchInput
          id={crypto.randomUUID()}
          type="text"
          name="name"
          //   value={name}
          onChange={changeFilter}
        />
      </StyledSearchWrapper>
    );
  }
}
