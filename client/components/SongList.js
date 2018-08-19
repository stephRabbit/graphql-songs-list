import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
// -------------------
import fetchSongsQuery from '../queries/fetchSongs'
import deleteSongMutation from '../mutations/deleteSong'

export class SongList extends Component {
  renderSongs = () => {
    const { data } = this.props
    return data.songs.map(({ id, title }) => (
      <li
        className="collection-item"
        key={id}
      >
        <Link to={`/songs/${id}`}>{title}</Link>
        <i
          className="material-icons"
          onClick={this.onDeleteSong(id)}
        >
          delete
        </i>
      </li>
    ))
  }

  onDeleteSong = id => () => {
    this.props.mutate({ variables: { id } })
      // Use when query is related to component (coming from props)
      .then(() => this.props.data.refetch())
  }

  render() {
    // console.log('props: ', this.props)
    if (this.props.data.loading) return (<div>Loading ...</div>)
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          className="btn-floating btn-large red right"
          to="/songs/new"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(deleteSongMutation)(
  graphql(fetchSongsQuery)(SongList)
)

