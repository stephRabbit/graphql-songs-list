import gql from 'graphql-tag'

const fetchSong = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`
export default fetchSong