import YouTube from "react-youtube"
const url = "DDkv354bou0"

const VideoPlayer = () => {

    return (
        <YouTube
            videoId={url}
            id="video"
            loading="lazy"
        />
    )
}

export default VideoPlayer;