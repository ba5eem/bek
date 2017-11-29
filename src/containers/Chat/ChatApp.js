import React, { Component } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import '../../index.scss';
import $ from 'jquery';
import '../../index.scss';
import TwilioChat from 'twilio-chat';

class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      username: null,
      channel: null,
    }
  }

  componentDidMount = () => {
    this.getToken()
      .then(this.createChatClient)
      .then(this.joinGeneralChannel)
      .then(this.configureChannelEvents)
      .catch((error) => {
        this.addMessage({ body: `Error: ${error.message}` })
      })
    this.setState({channel:this.props.channel})
  }

  getToken = () => {
    return new Promise((resolve, reject) => {
      this.addMessage({ body: 'Connecting...' })

      $.getJSON('/api/chat/token', (token) => {
        //console.log('token from ----->getToken()', token)
        this.setState({ username: token.identity })
        resolve(token)
      }).fail(() => {
        reject(Error('Failed to connect.'))
      })
    })
  }

  createChatClient = (token) => {
    //console.log('Token ------- >',token)
    return new Promise((resolve, reject) => {
      resolve(new TwilioChat(token.jwt))
    })
  }

  joinGeneralChannel = (chatClient) => {
    return new Promise((resolve, reject) => {
      chatClient.getSubscribedChannels().then(() => {
        chatClient.getChannelByUniqueName('general').then((channel) => {
          this.addMessage({ body: `Joining ${this.state.channel} channel...` })
          this.setState({ channel })

          channel.join().then(() => {
            this.addMessage({ body: `Joined general channel as ${this.state.username}` })
            window.addEventListener('beforeunload', () => channel.leave())
          }).catch(() => reject(Error('Could not join general channel.')))

          resolve(channel)
        }).catch(() => this.createGeneralChannel(chatClient))
      }).catch(() => reject(Error('Could not get channel list.')))
    })
  }

  createGeneralChannel = (chatClient) => {
    return new Promise((resolve, reject) => {
      this.addMessage({ body: 'Creating general channel...' })
      chatClient
        .createChannel({ uniqueName: 'general', friendlyName: 'General Chat' })
        .then(() => this.joinGeneralChannel(chatClient))
        .catch(() => reject(Error('Could not create general channel.')))
    })
  }

  addMessage = (message) => {
    const messageData = { ...message, me: message.author === this.state.username }
    //console.log('Message from----->addmessage()', message)
    this.setState({
      messages: [...this.state.messages, messageData],
    })
  }

  handleNewMessage = (text) => {
    if (this.state.channel) {
      this.state.channel.sendMessage(text)
    }
  }

  configureChannelEvents = (channel) => {
    channel.on('messageAdded', ({ author, body }) => {
      this.addMessage({ author, body })
    })

    channel.on('memberJoined', (member) => {
      this.addMessage({ body: `${member.identity} has joined the channel.` })
    })

    channel.on('memberLeft', (member) => {
      this.addMessage({ body: `${member.identity} has left the channel.` })
    })
  }

  render() {
    return (
      <div className="ChatApp">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    )
  }
}

export default ChatApp