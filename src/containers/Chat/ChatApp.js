import React, { Component } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import $ from 'jquery';
import '../../index.css';


class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      username: null,
    }
  }

  handleNewMessage = (text) => {
    this.setState({
      messages: [...this.state.messages, { me: true, author: "Me", body: text }],
    })
  }

  getToken = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        messages: [...this.state.messages, { body: `Connecting...` }],
      })

      $.getJSON('/token', (token) => {
        this.setState({ username: token.identity })
        resolve(token)
      }).fail(() => {
        reject(Error("Failed to connect."))
      })
    })
  }

  componentDidMount = () => {
    this.getToken()
      .catch((error) => {
        this.setState({
          messages: [...this.state.messages, { body: `Error: ${error.message}` }],
        })
      })

    createChatClient = (token) => {
      return new Promise((resolve, reject) => {
        resolve(new TwilioChat(token.jwt))
      })
    }
  }



  addMessage = (message) => {
    const messageData = { ...message, me: message.author === this.state.username }
    this.setState({
      messages: [...this.state.messages, messageData],
    })
  }

  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    )
  }
}

export default ChatApp