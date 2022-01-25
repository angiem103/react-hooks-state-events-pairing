import React from "react"
import Comment from "./Comment.js"

function CommentsCard({video}){
    return (
        <div>
            <h2>{video.comments.length} Comments</h2>
            <Comment video={video}/>
        </div>
    )

}

export default CommentsCard;