interface VideoPlayerProps {
  youtubeVideoId: string;
}

export function VideoPlayer({ youtubeVideoId }: VideoPlayerProps) {
  return (
    <div className="aspect-video w-full bg-black">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className='border-0'
      ></iframe>
    </div>
  );
}
