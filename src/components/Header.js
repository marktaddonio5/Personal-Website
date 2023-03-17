
import reactLogo from "../assets/logo192.png"
import { Link } from "react-router-dom"


const Header = () => {
    return(
        <section className="gridContainer containerBlack">
            <header className="headerSection">
                <img src={reactLogo} height="20vw" ></img>
                <nav>
                    <Link>Home</Link>
                    <Link to="" >Website Devlopment</Link>
                    <Link >Music Education</Link>
                    <Link >Trombonist</Link>
                </nav>
            </header>
        </section>
    )
}

export default Header;