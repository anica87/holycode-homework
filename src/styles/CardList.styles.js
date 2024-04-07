import styled from 'styled-components'
import { CardContainer } from './Card.styles'

export const CardListContainer = styled.div`
  padding: 8px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-bottom: 1px;
`

export const CardListHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9px 11px 1px 9px;
  color: ${(props) => props.theme.primaryFont};
  font-weight: 600;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`
export const CardListWrapper = styled.div`
  min-width: 170px;
  height: 88vh;
  padding: 10px;
  margin: 5px;
  &:nth-of-type(3n + 1) {
    background: ${(props) => props.theme.blueLightShade};
    ${CardListHeader} {
      background: ${(props) => props.theme.blueDarkerShade};
    }
    ${CardContainer} {
      background: ${(props) => props.theme.blueDarkShade};
    }
  }
  &:nth-of-type(3n + 2) {
    background: ${(props) => props.theme.pinkLightShade};
    ${CardListHeader} {
      background: ${(props) => props.theme.pinkDarkerShade};
    }
    ${CardContainer} {
      background: ${(props) => props.theme.pinkDarkShade};
    }
  }
  &:nth-of-type(3n + 3) {
    background: ${(props) => props.theme.navyBlauLightShade};
    ${CardListHeader} {
      background: ${(props) => props.theme.navyBlauDarkerShade};
    }
    ${CardContainer} {
      background: ${(props) => props.theme.navyBlauDarkShade};
    }
  }
`
