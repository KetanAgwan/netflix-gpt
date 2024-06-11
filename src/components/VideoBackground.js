import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // fetch movie trailer and updating the store with the trailer video data
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  //   console.log(trailerVideo)

  useMovieTrailer(movieId);

  return (
    <div className="absolute z-0 h-full w-screen border border-green-500">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/Kdr5oedn7q8?si=" + trailerVideo?.key +
          "&autoplay=1" +
          "&mute=1" +
          "&controls=0" + 
          "&loop=1" + 
          "&vq=hd1080"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen="allowfullscreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
