import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
// -------------------
import addSongMutation from '../mutations/addSong'
import fetchSongsQuery from '../queries/fetchSongs'

export class SongCreate extends Component {
  state = {
    title: ''
  }

  inputChange = name => e => {
    const inputEvent = e.target
    this.setState(() => ({ [name]: inputEvent.value }))
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      // Use when query is not related to component (not coming from props)
      refetchQueries: [{ query: fetchSongsQuery }]
    })
    .then(() => this.props.history.push('/'))
  }

  render() {
    const { title } = this.state
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new song!</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song title</label>
          <input
            onChange={this.inputChange('title')}
            type="text"
            value={title}
          />
        </form>
      </div>
    )
  }
}

export default graphql(addSongMutation)(SongCreate)