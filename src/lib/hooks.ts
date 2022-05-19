import useSWR from "swr";
import { fetcher } from "./fetcher";

export function usePlaylist() {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
}
