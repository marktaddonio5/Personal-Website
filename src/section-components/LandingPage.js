import headshot from "../assets/Headshot 2017 copy.jpg"


const LandingPage = () => {
    
    return (
        <section className="containerBeige landingSection" id="landing-section">
            <h1>Mark Taddonio</h1>
            <img className="headshot" src={headshot} />
            <p className="flex" style={{lineHeight: 2}}>
                <span>Front-End Developer</span>
                <span>Music Educator</span>
                <span>Trombonist</span>
            </p>
            
            <h1>Contact</h1>
            <p className="flex">
                <span>marktaddonio5@gmail.com</span>
                <span>+43 650 436 9442</span>
                <span>1a/16 Löwengasse</span>
                <span>Vienna, Austria, 1030</span>
            </p>
            
        </section>
    )
}

export default LandingPage