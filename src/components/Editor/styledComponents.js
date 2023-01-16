import styled from 'styled-components'

export const Container = styled.div`
  background: #25262c;
  width: 100vw;
  height: 100vh;
  padding: 5%;
`

export const CardContainer = styled.div`
  background: #1b1c22;
  width: 88vw;
  height: 80vh;
  border-radius: 5px;
  display: flex;
  align-items: center;
`

export const CustomHeading = styled.h1`
  font-family: Roboto;
  color: #f8fafc;
`

export const ImageContainer = styled.div`
  width: 44vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const CustomImage = styled.img`
  width: 70%;
`
export const EditorContainer = styled.div`
  width: 42vw;
  height: 76vh;
  background: #25262c;
  border-radius: 10px;
  border: 1px solid #334155;
`
export const CustomButton = styled.button`
  background: transparent;
  border: none;
  outline: none;

  color: props => props.color;
`

export const EditorHeaderContainer = styled.div`
  height: 15%;
  border-bottom: 1px solid #334155;
  padding: 4%;
`
export const CustomTextInput = styled.textarea`
  background: transparent;
  padding: 20px;
  border: none;
  outline: none;
  color: #ffffff;
`
