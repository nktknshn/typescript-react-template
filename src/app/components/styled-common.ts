import styled, { keyframes } from 'app/styled'

export const TextMain = styled.span`
color: ${({ theme }) => theme.textMainColor};
`

export const TextSecondary = styled.span`
color: ${props => props.theme.textSecondaryColor};
font-size: smaller;
font-weight: normal;
`

export const DirectionColumns = styled.div`
display: flex;
flex-direction: column;
`
export const DirectionRow = styled.div`
display: flex;
flex-direction: row;
`

export const Centered = styled(DirectionRow)`
margin: 0 auto;
width: 200px; 
`

export const popupAnimation = keyframes`
0%{
  transform: scale(0.3);
}
100%{
  transform: scale(1);
}
`
export const Overlay = styled.div`
position: fixed;
background-color: ${props => props.theme.overlayBackgroundColor};
z-index: 2;
top: 0;
left: 0;
width: 100%;
height: 100%;
`