import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  background: ${(props) => props.theme.primary};
  height: 40px;
  width: 100%;
`
export const HeaderInputWrapper = styled.div`
  display: flex;
  width: 90%;
  margin-left: 4px;
  justify-content: flex-end;
`
export const HeaderIconsContainer = styled.div`
  justify-self: flex-end;
  margin-right: 4px;
`
