import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import Image from "next/image";

import styles from "./styles.module.scss";

const Player = () => {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando Agora" />
        <strong>Tocando Agora </strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            alt="Thumbnail Episodio"
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selcione um Podcast para ouvir.</strong>
        </div>
      )}

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlyder} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="Emparalhar" />
          </button>

          <button type="button">
            <img src="/play-previous.svg" alt="Tocar Anterior" />
          </button>

          <button type="button" className={styles.playButton}>
            <img src="/play.svg" alt="Tocar" />
          </button>

          <button type="button">
            <img src="/play-next.svg" alt="Tocar Proximo" />
          </button>

          <button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Player;
