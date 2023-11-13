import { basehub } from "basehub"
import Player from "./components/player";

async function getEpisodes() {
  const data = await basehub({ next: { revalidate: 30}})
    .query({
      podcastEpisodes: {
        _id: true,
        _meta: {
          totalCount: true,
        },
        _slug: true,
        _title: true,
        items: {
          _id: true,
          _slug: true,
          _title: true,
          audioFile: {
            fileName: true,
            fileSize: true,
            lastModified: true,
            mimeType: true,
            url: true,
          },
          description: true,
          episodeNumber: true,
          releaseDate: true,
          title: true,
        },
      },
    })

  return data.podcastEpisodes.items
}

export default async function Home() {
  const episodes = await getEpisodes()

  return (
    <main className="min-h-full p-24">
      <div className="flex flex-col items-center">
        <h1 className="font-blob text-4xl text-sky-800">The Developer Health Show</h1>
        <h2 className="text-xl text-sky-800">The non-technical show for technical people</h2>
      </div>
      <Player episodes={episodes}/>
    </main>
  )
}
