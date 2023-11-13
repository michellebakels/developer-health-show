import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {Episode} from "../../lib/types";

type Props = {
  episode: Episode | undefined
}

export default function Audio({episode}: Props) {

  return (
    <div className="overflow-hidden rounded-md border-sky-800/50 border-4">
        <div className="p-6 text-sky-800">
          <h3 className="font-blob">{episode?.title}</h3>
          {episode && episode.audioFile &&
            <AudioPlayer
                autoPlay
                src={episode.audioFile.url}
                style={{boxShadow: "none", backgroundColor: "transparent", color: "white"}}
            />
          }
        </div>
    </div>
  )
}