import gql from 'graphql-tag'

const addLyricsToSong = gql`
  mutation AddLyricToSong($content: String, $songId: ID){
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content,
        likes
      }
    }
  }
`
export default addLyricsToSong