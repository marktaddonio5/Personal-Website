
import reactLogo from "../assets/logo192.png"
import { Link } from "react-router-dom"

const Header = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

    return(
        <section className="gridContainer containerBlack">
            <header className="headerSection">
                <img src={reactLogo} height="20vw" ></img>
                <nav>
                    <Link to="/" id="home"onClick={handleClick("landing")} >Home</Link>
                    <Link to="/webDevelopment" id="webDevlopment" onClick={handleClick("webDevelopment")}>Website Devlopment</Link>
                    <Link to="/musicEd" id="music" onClick={handleClick("musicEd")} >Music Education</Link>
                    <Link to="/trombonist" id="trombonist" onClick={handleClick("trombone")} >Trombonist</Link>
                </nav>
            </header>
        </section>
    )
}

export default Header;