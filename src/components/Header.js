
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

    const [prevMousePos, setPrevMousePos] = useState(0)

    useEffect(() =>{
        window.addEventListener('mousemove', (e) => {
            const mousePos = e.clientY
            if (mousePos <= 16) return setVisible(true)
            if (mousePos - prevMousePos > 90 && window.scrollY != 0 ) return setVisible(false)
            return () => window.removeEventListener('mousemove'), setPrevMousePos(mousePos)
        })
    }, [prevScrollPos, handleClick])

    const handleScroll = debounce(() => {
        const currentScrollPos = window.scrollY;
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 160)
            || currentScrollPos < 30
            || prevScrollPos > currentScrollPos && visible === true);
        setPrevScrollPos(currentScrollPos);
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll])

    return(
            <header className="headerSection containerBlack" style={{top: visible ? '0' : '-60px'}}>
                <img src={reactLogo} height="20vw" ></img>
                <nav>
                    <ul>
                        <li><Link id="home" onClick={handleClick("landing")}>Home</Link></li>
                        <li><Link  id="webDevelopment" onClick={handleClick("webDevelopment")}>Website Development</Link></li>
                        <li><Link  id="projects" onClick={handleClick("projects")}>Component Projects</Link></li>
                        <li><Link id="music" onClick={handleClick("musicEd")} >Music Education</Link></li>
                        <li><Link id="trombonist" onClick={handleClick("trombone")} >Trombonist</Link></li>
                    </ul>
                </nav>
            </header>
    );
   
}

export default Header;