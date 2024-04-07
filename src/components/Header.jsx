import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  HeaderContainer,
  HeaderInputWrapper,
} from '../styles/Header.styles';
import SearchInput from './SearchInput';
import { setSearch } from '../redux/actions/searchActions';

const Header = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.search);

  return (
    <HeaderContainer>
      <HeaderInputWrapper>
        <SearchInput
          placeholder='Search tickets...'
          value={searchValue}
          onChange={e => dispatch(setSearch(e.target.value))}
        />
      </HeaderInputWrapper>
    </HeaderContainer>
  );
};

export default Header;
