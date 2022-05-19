import { Playlist } from "@prisma/client";
import { NextApiRequest } from "next";
import React from "react";
import PlaylistLayout from "../../components/PlaylistLayout";
import PlaylistTable from "../../components/PlaylistTable";
import prisma from "../../lib/prisma";

function Playlists() {
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

// export async function getServerSideProps({ query }: any) {
//   const [playlist] = await prisma.playlist.findMany();

//   console.log(playlist);
//   return {
//     props: {
//       playlist,
//     },
//   };
// }

export default Playlists;
