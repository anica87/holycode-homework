import React from 'react';
import { Input, InputContainer, } from '../styles/Input.styles';

const SearchInput = props => (
  <InputContainer>
  <Input {...props} />
</InputContainer>
);

export default SearchInput;
