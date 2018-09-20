import React from "react"

import Song from "./Song"

const SongCollection = (props) => {

  let songComponents = props.songs.map((song) => {
    let songClass
    let songClickHandler = () => {
      props.setSelectedSong(song.id)
    }

    if (song.id === props.selectedSongId){
      songClass = "selected"
    } else {
      songClass = ""
    }

    return(
      <Song
        key={song.id}
        song={song}
        songClickHandler={songClickHandler}
        songClass={songClass}
      />
    )
  })

  return(
    <div>
      {songComponents}
    </div>
  )
}

export default SongCollection
