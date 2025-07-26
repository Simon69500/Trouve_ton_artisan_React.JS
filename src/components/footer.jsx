import { NavLink } from "react-router-dom";
import Logo from '../assets/logo/Logo.png';
import '../styles/SCSS/components/footer.scss';

const Footer = () => {
    return (
        <>
        <div id="footer">
            <div className="logo">
                <NavLink to="/"> 
                    <img src={Logo} alt="logo du site" className="logo-imgFooter" />
                </NavLink> 
            </div>
            <div className='adress'>
                <h4>Lyon</h4>
                <p>
                <small>
                101 cours charlemagne <br />
                CS 20033 <br />
                69269 LYON cedex 02 <br />
                France <br />
                +33 (0)4 26 73 40 00
                </small>
                </p>
            </div>
            <div className='pages'>
                <h4>Pages légales</h4>
                <NavLink to="/construction" className="link">Mentions légales</NavLink>
                <NavLink to="/construction" className="link">Données personelles</NavLink>
                <NavLink to="/construction" className="link">Cookies</NavLink>
                <NavLink to="/construction" className="link">Accesibilités</NavLink>
            </div>
        </div>
        </>
    )
}

export default Footer