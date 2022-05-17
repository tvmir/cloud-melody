import { Artist } from "@prisma/client";
import { useStoreState } from "easy-peasy";
import Player from "./Player";

function PlayerDetails() {
  const songs: Artist[] = useStoreState((state: any) => state.changeSongs);
  const song = useStoreState((state: any) => state.changeCurrSong);

  return (
    <div className="h-full w-[100vw] py-2 pr-2">
      <div className="flex items-center justify-center">
        <div className="p-3.5 mb-6 w-[98%] h-full">
          <div className="pb-2">
            <p className="text-sm text-white">bracco.</p>
            <p className="text-xs text-gray-300">kujo & nayz</p>
          </div>
        </div>
        <div className="w-full absolute">
          {/* {song ? <Player songs={songs} active={song} /> : null} */}
          <Player songs={songs} active={song} />
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
