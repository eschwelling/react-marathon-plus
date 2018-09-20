import React, {Component} from 'react';

import PlaylistCollection from './PlaylistCollection.js';
import SongCollection from './SongCollection.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedPlaylistId: null,
      selectedSongId: null
    }

    this.setSelectedPlaylist=this.setSelectedPlaylist.bind(this)
    this.setSelectedSong=this.setSelectedSong.bind(this)
  }

  setSelectedPlaylist(playlistId) {
    this.setState({selectedPlaylistId: playlistId});
  }

  setSelectedSong(songId){
    this.setState({selectedSongId: songId})
  }

  render() {
    let playlists = this.props.data.playlists
    let songs = this.props.data.songs

    // create variable "selectedPlaylistSongIds"
    // look use the selectedPlaylistId, to retrieve the song ids from the song that is selected

    // create an array called "selectedPlaylistSongs"
    // iterate over all of the songs, and push said song into the "selectedPlaylistSongs" array if its id is in "selectedPlaylistSongIds"
    

    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>

        <div className= "small-6 columns">
          <h4>Playlists</h4>
          <PlaylistCollection
            playlists={playlists}
            setSelectedPlaylist={this.setSelectedPlaylist}
            selectedPlaylistId={this.state.selectedPlaylistId}
          />
        </div>


      <div className= "small-6 columns" >
        <h4>Songs</h4>
        <SongCollection
          songs={songs}
          setSelectedSong={this.setSelectedSong}
          selectedSongId={this.state.selectedSongId}
        />
      </div>

      </div>

    );
  }
}

export default App;
