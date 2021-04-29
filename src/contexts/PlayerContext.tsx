import { createContext, ReactNode, useContext, useState } from "react";

interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  play: (episode: Episode) => void;
  playlist: (list: Episode[], index: number) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setPlayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

interface PlayerContextProviderProps {
  children: ReactNode;
}

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playlist(list: Episode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = currentEpisodeIndex + 1 < episodeList.length;

  function playNext() {
    if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        episodeList,
        currentEpisodeIndex,
        hasPrevious,
        hasNext,
        play,
        togglePlay,
        setPlayingState,
        playlist,
        playNext,
        playPrevious,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
}
