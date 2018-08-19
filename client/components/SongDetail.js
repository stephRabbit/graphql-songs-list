import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
// -------------------
import fetchSongQuery from '../queries/fetchSong'
// -------------------
import LyricCreate from './LyricCreate'

export const SongDetail = props => {
  const { song } = props.data
  if (!song) return (<div>Loading ...</div>)
  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricCreate songId={props.match.params.id} />
    </div>
  )
}

export default graphql(fetchSongQuery, {
  // Intercept props from component and pass to query
  options: props => ({ variables: { id: props.match.params.id } })
})(SongDetail)