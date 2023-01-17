import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'
import {
  EditorHeaderContainer,
  CustomButton,
  EditorContainer,
  CustomTextInput,
  ListItem,
} from '../Editor/styledComponents'
import {CustomParagraph} from './styledComponents'

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
    const hasStyle = isBold || isItalic || isUnderline
    console.log(textBold, textItalic, textUnderline)
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
          <ListItem>
            <CustomButton
              type="button"
              textColor={boldColor}
              onClick={clickedBold}
              data-testid="bold"
            >
              <VscBold size={25} color={boldColor} />
            </CustomButton>
          </ListItem>
          <ListItem>
            <CustomButton
              type="button"
              textColor={italicColor}
              onClick={clickedItalic}
              data-testid="italic"
            >
              <GoItalic size={25} color={italicColor} />
            </CustomButton>
          </ListItem>
          <ListItem>
            <CustomButton
              type="button"
              textColor={underlineColor}
              onClick={clickedUnderline}
              data-testid="underline"
            >
              <AiOutlineUnderline size={25} color={underlineColor} />
            </CustomButton>
          </ListItem>
        </EditorHeaderContainer>
        {!hasStyle && (
          <CustomTextInput
            rows="5"
            cols="30"
            value={textInput}
            onChange={this.changeTextInput}
          />
        )}
        {hasStyle && (
          <CustomParagraph
            bold={textBold}
            italic={textItalic}
            underline={textUnderline}
          >
            {textInput}
          </CustomParagraph>
        )}
      </EditorContainer>
    )
  }
}
export default EditorItem
