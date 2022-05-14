import React from "react";
import PlaylistLayout from "../../components/PlaylistLayout";
import PlaylistTable from "../../components/PlaylistTable";

function Playlists() {
  return (
    <PlaylistLayout
      title="Wavy Tunes"
      subtitle="Playlist"
      createdBy="TJ Jenk"
      image={
        "https://i1.sndcdn.com/artworks-liGzyRADoyQ35Hz0-h3HwDw-t500x500.jpg"
      }
    >
      <PlaylistTable />
    </PlaylistLayout>
  );
}

export default Playlists;
