import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'
import {
  EditorHeaderContainer,
  CustomButton,
  EditorContainer,
  CustomTextInput,
} from '../Editor/styledComponents'

class EditorItem extends Component {
  state = {textInput: ''}

  changeTextInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  render() {
    const {textInput} = this.state
    const {
      isBold,
      isItalic,
      isUnderline,
      boldClicked,
      italicCLicked,
      underlineClicked,
    } = this.props
    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderline ? '#faff00' : '#f1f5f9'

    const textBold = isBold ? 'bold' : 'normal'
    const textItalic = isItalic ? 'italic' : 'normal'
    const textUnderline = isUnderline ? 'underline' : 'normal'
    const clickedBold = () => {
      boldClicked()
    }

    const clickedItalic = () => {
      italicCLicked()
    }

    const clickedUnderline = () => {
      underlineClicked()
    }

    return (
      <EditorContainer>
        <EditorHeaderContainer>
          <CustomButton
            type="button"
            textColor={boldColor}
            onClick={clickedBold}
          >
            <VscBold size={25} color={boldColor} />
          </CustomButton>
          <CustomButton
            type="button"
            textColor={italicColor}
            onClick={clickedItalic}
          >
            <GoItalic size={25} color={italicColor} />
          </CustomButton>
          <CustomButton
            type="button"
            textColor={underlineColor}
            onClick={clickedUnderline}
          >
            <AiOutlineUnderline size={25} color={underlineColor} />
          </CustomButton>
        </EditorHeaderContainer>
        <CustomTextInput
          rows="5"
          cols="30"
          isBold={textBold}
          isItalic={textItalic}
          isUnderline={textUnderline}
          value={textInput}
          onChange={this.changeTextInput}
        >
          {textInput}
        </CustomTextInput>
      </EditorContainer>
    )
  }
}
export default EditorItem
