import headshot from "../assets/Headshot 2017 copy.jpg"


const LandingPage = () => {
    
    return (
        <section className="containerBeige landingSection" id="landing-section">
            <article className="grid1-6">
                <h1>Mark Taddonio</h1>
                <p className="flex">
                    <span>Front-End Developer</span>
                    <span>Music Educator</span>
                    <span>Trombonist</span>
                </p>
            </article>
            <img className="headshot" src={headshot} />
            <article className="grid7-12">
                <h1>Contact</h1>
                <p className="flex">
                    <span>marktaddonio5@gmail.com</span>
                    <span>+43 650 436 9442</span>
                    <span>1a/16 Löwengasse</span>
                    <span>Vienna, Austria, 1030</span>
                </p>
            </article>
        </section>
    )
}

export default LandingPage