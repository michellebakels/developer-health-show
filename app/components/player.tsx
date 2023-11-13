'use client'
import {Episode} from "../../lib/types";
import Audio from "./audio";
import {useState} from "react";

type Props = {
  episodes: Episode[]
}

export default function Player({episodes}: Props) {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | undefined>(undefined);

  return (
    <>
      <div className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">

            {/* Left column */}
            {selectedEpisode &&
              <div className="transition duration-300 delay-150 ease-in grid grid-cols-1 gap-4">
                  <section aria-labelledby="section-2-title">
                      <h2 className="sr-only" id="section-2-title">
                          Episode Player
                      </h2>
                      <Audio episode={selectedEpisode}/>
                  </section>
              </div>
            }

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Episodes
                </h2>
                <div className="overflow-hidden rounded-md border-sky-800/50 border-4">
                  <div className="flex flex-col divide-y text-sky-800">
                    {episodes.map((episode) => (
                      <div
                        key={episode.episodeNumber}
                        className="flex justify-between items-center p-6 cursor-pointer"
                        onClick={() => {setSelectedEpisode(episode)}}
                      >
                        <div>
                          <p className="text-xl">{episode.title}</p>
                          <p className="font-mono text-sm">{episode.description}</p>
                        </div>
                        <div className="font-blob text-4xl">
                          <p>{episode.episodeNumber}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}