import {Component} from 'react'

import {
  Container,
  CardContainer,
  ImageContainer,
  CustomImage,
  CustomHeading,
} from './styledComponents'
import EditorItem from '../EditorItem'

class Editor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderline, hasStyle} = this.state
    console.log(isBold, isItalic, isUnderline)

    return (
      <Container>
        <CardContainer>
          <ImageContainer>
            <CustomHeading>Text Editor</CustomHeading>
            <CustomImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <EditorItem
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
            boldClicked={this.onClickBold}
            italicCLicked={this.onClickItalic}
            underlineClicked={this.onClickUnderline}
          />
        </CardContainer>
      </Container>
    )
  }
}

export default Editor
