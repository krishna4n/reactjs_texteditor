import styled from 'styled-components'

export const CustomParagraph = styled.p`
  padding-left: 20px;
  font-family: Roboto;
  color: #f1f5f9;
  font-weight: ${props => props.bold};
  font-style: ${props => props.italic};
  text-decoration-line: ${props => props.underline};
`
