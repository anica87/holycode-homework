import styled from 'styled-components'
import { device } from './devices'

export const BoardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  margin: 10px;
  margin-top: 45px;
  @media device and ${device.tabletLandscape} {
    overflow-x: auto;
  }
`
