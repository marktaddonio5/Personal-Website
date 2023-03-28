import YouTube from "react-youtube"
const url = "DDkv354bou0"

const VideoPlayer = () => {

    return (
        <YouTube
            videoId={url}
            loading="loading"
        />
    )
}

export default VideoPlayer;