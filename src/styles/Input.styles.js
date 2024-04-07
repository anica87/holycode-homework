import styled from 'styled-components'

export const Input = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  color: ${(props) => props.theme.darkFont};
  float: left;
  font-size: 13px;
  height: 32px;
  line-height: 19px;
  margin: 0;
  outline: none;
  padding-left: 8px;
  padding-right: 30px;
  transition: width 0.15s;
  width: 100%;
  cursor: pointer;

  &:focus {
    cursor: unset;
    background-color: ${(props) => props.theme.lightGray};
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add shadow when focused */
    color: ${(props) => props.theme.darkFont};
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.darkFont};
    }

    :-ms-input-placeholder {
      color: ${(props) => props.darkFont};
    }

    ::placeholder {
      color: ${(props) => props.darkFont};
    }
  }
`
export const InputContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || '80%'};
`

export const IconWrapper = styled.span`
  position: absolute;
  right: 7px;
  top: 7px;
`
