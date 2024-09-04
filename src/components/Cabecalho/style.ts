import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 24px 0;
`
