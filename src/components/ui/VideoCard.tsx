import { useState } from 'react'
import { PlayCircle } from 'lucide-react'
import type { VideoItem } from '@/data/videos'

export function VideoCard({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl border border-neutral-200 shadow-soft">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-ink-950 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
      aria-label={`Play video: ${video.title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent p-4">
        <PlayCircle className="absolute inset-0 m-auto h-12 w-12 text-white/90 transition-transform duration-300 group-hover:scale-110" />
        <p className="text-left text-sm font-semibold leading-snug text-white">{video.title}</p>
        <p className="text-left text-xs text-white/50">{video.channel}</p>
      </div>
    </button>
  )
}
