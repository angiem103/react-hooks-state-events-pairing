import React, { useState } from "react";
import CommentsCard from "./CommentsCard.js";



function VideoInfo({video}){

    const [videoData, setVideoData] = useState(video)
    const [isVisible, setIsVisible] = useState(true)

    function increaseLikes(){
        const videoInfo = {...videoData}
        videoInfo.upvotes = videoInfo.upvotes + 1
        console.log(videoInfo)
        setVideoData(videoInfo)
    }

    function decreaseLikes(){
        const videoInfo = {...videoData}
        videoInfo.downvotes = videoInfo.downvotes - 1
        console.log(videoInfo)
        setVideoData(videoInfo)
    }
    
    function handleComments(){
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={videoData.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={videoData.title}
            />
            <h1>{videoData.title}</h1>
            <span>{videoData.views} Views | Uploaded {videoData.createdAt}</span>
            <br></br>
            <button onClick={increaseLikes}>{videoData.upvotes} 👍 </button>
            <button onClick={decreaseLikes}>{videoData.downvotes} 👎 </button>
            <br></br>
            <button onClick={handleComments}>{isVisible ? "Hide Comments" : "Show Comments"}</button>
            {isVisible ? <CommentsCard video={videoData} /> : "" }
        </div>
    )

}

export default VideoInfo;