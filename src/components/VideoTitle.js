const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-10 px-16 flex justify-end items-start flex-col left-0 bottom-0 pb-32 h-full w-full gap-5 bg-gradient-to-r from-black">
      <h1 className="text-[40px] font-bold text-white w-1/2">{title}</h1>
      <p className="text-md text-white w-1/2">{overview}</p>
      <div className="flex items-center justify-start gap-10 w-full">
        <button className="px-4 py-2 font-bold bg-white text-black rounded">▶ Play</button>
        <button className="px-4 py-2 font-bold bg-gray-500 text-white bg-opacity-40 rounded">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
