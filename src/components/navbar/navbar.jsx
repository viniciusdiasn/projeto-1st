import { Link } from "react-router-dom";
import LogoSenai from '../../assets/img/Logo SENAI.svg'

export default function NavBar() {
    return (
        <>
            <header className='headerhome-container'>
                <img src={LogoSenai} alt="" />
                <div className="links">
                    <a href="">Matérias</a>
                    <a href="">Especifícações</a>
                    <a href="">Créditos</a>

                    <Link to="/hardware">Hare</Link>
                </div>
            </header>
        </>
    )
}