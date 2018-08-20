import React, { Component } from 'react'

export class LyricList extends Component {
  render() {
    const { lyrics } = this.props
    if (lyrics.length === 0) {
      return <h5>Add some lyrics...</h5>
    }

    return (
      <ul className="collection">
        {lyrics.map(lyric => (
          <li
            className="collection-item"
            key={lyric.id}
          >
            {lyric.content}
          </li>
        ))}
      </ul>
    )
  }
}

export default LyricList
