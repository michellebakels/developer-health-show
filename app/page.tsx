import { basehub } from "basehub"

async function getEpisodes() {
  const data = await basehub({ next: { revalidate: 30}})
    .query({
      episodes: {
        _id: true,
        _slug: true,
        _title: true,
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
      },
    })

  return data.episodes.podcastEpisodes.items
}

export default async function Home() {
  const episodes = await getEpisodes()

  return (
    <main className="min-h-full p-24">
      <div className="flex flex-col items-center">
        <h1 className="font-blob text-4xl text-sky-800">The Developer Health Show</h1>
        <h2 className="text-xl text-sky-800">The non-technical show for technical people</h2>
      </div>

      <div className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6 text-sky-800">
                    {episodes.map((episode) => (
                      <div>
                        <p>{episode.episodeNumber}</p>
                        <p>{episode.title}</p>
                        <p>{episode.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6 text-sky-800">media player</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
