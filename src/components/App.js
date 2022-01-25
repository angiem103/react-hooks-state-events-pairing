import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";

function App() {


  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoInfo video={video}/>
    </div>
  );
}

export default App;
