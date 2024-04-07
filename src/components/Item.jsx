import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
width: 500px;
background-color: white;
border-radius: 10px;
margin: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


const Item = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.object]),
};

export default Item;
