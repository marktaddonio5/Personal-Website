
import reactLogo from "../assets/logo192.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { debounce } from "../helperFunctions/debounce";

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

    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = debounce(() => {
        const currentScrollPos = window.scrollY;
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 300) || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll])

    return(
            <header className="headerSection containerBlack" style={{top: visible ? '0' : '-100px'}}>
                <img src={reactLogo} height="20vw" ></img>
                <nav>
                    <Link to="/" id="home"onClick={handleClick("landing")} >Home</Link>
                    <Link to="/webDevelopment" id="webDevlopment" onClick={handleClick("webDevelopment")}>Website Devlopment</Link>
                    <Link to="/musicEd" id="music" onClick={handleClick("musicEd")} >Music Education</Link>
                    <Link to="/trombonist" id="trombonist" onClick={handleClick("trombone")} >Trombonist</Link>
                </nav>
            </header>
    );
   
}

export default Header;