import React, { Component } from 'react'
import ContentEditable from 'react-wysiwyg'

export default class EditableCell extends Component {
  render () {
    return (
      <ContentEditable
        tagName='td'
        onChange={this.props.onChange}
        html={this.props.value}
        editing={true}
        style={{whiteSpace: 'pre-wrap'}}
        preventStyling
        noLinebreaks
      />
    )
  }
}