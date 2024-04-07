import React, { useState, useRef, } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Item from './Item';
import { Input } from '../styles/Input.styles';

const OverlayContainer = styled.div`
height: 100vh;
width: 100vw;
background: ${props => props.theme.lightGray};
position: fixed;
top: 0;
left: 0;
z-index: 6;
`;

const Overlay = () => {
  return (<OverlayContainer />);
};

const ModalContainer = styled.div`
height: 100vh;
width: 100vw;
background: rgba(0, 0, 0, 0.7);
position: fixed;
top: 0;
left: 0;
z-index: 7;
display: flex;
justify-content: center;
align-items: center;
`;

const Title = styled.h5`
color: ${props => props.theme.darkFont};
margin: 10px;
`;

const AddForm = styled.form`
max-width: ${props => props.maxWidth};
min-width: 154px;
margin: 20px;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
background-color: #f9f9f9;
padding: 20px;
`;

const AddButtonForm = styled.button`
max-width: ${props => props.maxWidth};
min-width: 154px;
margin: 10px;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
background-color: #f9f9f9;
`;

export const Modal = props => {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);

  const handleCancel = () => props.handleClose(false);
  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (value) {
      props.onConfirm(value);
      props.handleClose(false);
    }
    setValue('');
    setFocus(false);
  };

  const handleKeyDown = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      onSubmit(e);
      setValue('');
    }
  };


  return (
    <ModalContainer>
      <Item>
        <Title>Add ticket</Title>
        <AddForm
          onSubmit={onSubmit}
  
        >
          <Input
            ref={ref}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyDown={handleKeyDown}
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={focus || value ? props.focusPlaceholder : props.placeholder}
          />
          <AddButtonForm type="submit">Submit</AddButtonForm>
          <AddButtonForm type="button" onClick={handleCancel} >Cancel</AddButtonForm>
        </AddForm>
      </Item>
    </ModalContainer>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  onConfirm: PropTypes.func,
  focusPlaceholder: PropTypes.string,
  placeholder: PropTypes.string
};

export const FormModal = (props) => {
  return (
    <>
      { ReactDOM.createPortal(
        <Overlay props />,
        document.getElementById('overlay-root')
      )}
      {ReactDOM.createPortal(
        <Modal
          {...props}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
};
