import React, { Component } from 'react'
import { graphql } from 'react-apollo'
// -------------------
import likeLyricMutation from '../mutations/likeLyric'

export class LyricList extends Component {
  likeLyric = (id, likes) => () => {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          __typename: 'LyricType',
          id,
          likes: likes + 1
        }
      }
    })
  }

  renderLyrics = () => {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li
        className="collection-item"
        key={id}
      >
        {content}
        <div className="vote-box">
          <span className="vote-box-count">{likes}</span>
          <i
            className="material-icons"
            onClick={this.likeLyric(id, likes)}
          >
            thumb_up
          </i>
        </div>
      </li>
    ))
  }

  render() {
    const { lyrics } = this.props
    if (lyrics.length === 0) {
      return <h5>Add some lyrics...</h5>
    }

    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    )
  }
}

export default graphql(likeLyricMutation)(LyricList)
