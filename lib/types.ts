export type Episode = {
    audioFile: {
      fileName: string,
      fileSize: number,
      lastModified: number,
      mimeType: string,
      url: string,
    } | null,
    description: string | null,
    episodeNumber: number | null,
    // releaseDate: Date,
    title: string | null,
}