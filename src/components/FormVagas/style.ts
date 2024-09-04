import styled from 'styled-components'

export const FormPesquisa = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisar = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondary};
  margin-left: 8px;
  cursor: pointer;
`

export const InputPesquisar = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.colors.primary};
`
