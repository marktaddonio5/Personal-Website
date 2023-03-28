import VideoPlayer from "../components/VideoPlayer";

const Trombone = () => {
    return(
        <section className="mainSection containerBlue" id="trombone-section">
            <h1>Trombonist</h1>
            <h3>Professional Experience</h3>
            <p>Info about performing experience</p>
            <h3>Video and Audio</h3>
            <VideoPlayer />
        </section>
    )
}

export default Trombone;