
const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default VideoBackground;
