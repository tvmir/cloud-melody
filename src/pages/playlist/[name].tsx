import { Playlist } from "@prisma/client";
import React from "react";
import PlaylistLayout from "../../components/PlaylistLayout";
import PlaylistTable from "../../components/PlaylistTable";

interface Props {
  playlist: Playlist;
}

function Playlists({ playlist }: any) {
  return (
    <PlaylistLayout
      title="Type Beats"
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
