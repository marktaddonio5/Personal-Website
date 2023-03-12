import Nav from "./Nav"
import reactLogo from "../assets/logo192.png"

const Header = () => {
    
    return(
        <section className="gridContainer containerBlack">
            <header className="headerSection">
                <img src={reactLogo} height="20%" ></img>
                <Nav />
            </header>
        </section>
    )
}

export default Header;