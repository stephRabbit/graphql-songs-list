import React, { Component } from 'react'
import { graphql } from 'react-apollo'
// -------------------
import addLyricsToSongMutation from '../mutations/addLyricsToSong'

export class LyricCreate extends Component {
  state = {
    content: ''
  }

  inputChange = name => e => {
    const inputEvent = e.target
    this.setState(() => ({ [name]: inputEvent.value }))
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    })
    .then(() => this.setState(() => ({ content: '' })))
  }

  render() {
    const { content } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a lyric</label>
        <input
          onChange={this.inputChange('content')}
          type="text"
          value={content}
        />
      </form>
    )
  }
}

export default graphql(addLyricsToSongMutation)(LyricCreate)