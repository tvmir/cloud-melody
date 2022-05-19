import { Song } from "@prisma/client";

import { useStoreActions } from "easy-peasy";

interface Props {
  songs: Song[];
}

function PlaylistTable() {
  const songs = new Array(10).fill(1).map((_, i) => `Song ${i + 1}`);

  return (
    <div className="text-[#66636A] mt-0 bg-gradient-to-b">
      <div className="px-9 w-full">
        <div>
          <table>
            <thead className="border-b border-none w-[100vw]">
              <tr>
                <th className="pr-48 font-semibold text-sm pb-2">#</th>
                <th className="pr-60 font-semibold text-sm pb-2">Title</th>
                <th className="pr-48 font-semibold text-sm pb-2">Artist</th>
                <th className="pr-48 font-semibold text-sm pb-2">Date Added</th>
                <th className="font-semibold text-sm pb-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, i) => (
                <tr className="cursor-pointer hover:bg-[#311F31] duration-500">
                  <td className="text-[#a99dad] text-sm font-semibold py-2">
                    {i + 1}
                  </td>
                  <td className="text-[#a99dad] text-sm font-semibold">
                    bracco.
                  </td>
                  <td className="text-[#a99dad] text-sm font-semibold">
                    kujo & nayz
                  </td>
                  <td className="text-[#a99dad] text-sm font-semibold">
                    2022-05-16
                  </td>
                  <td className="text-[#a99dad] text-sm font-semibold">2:46</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlaylistTable;
