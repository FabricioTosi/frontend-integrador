import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Menu() {
    const navigate = useNavigate();

    const [token, setToken] = useState("");

    useEffect(() => {
        const t = sessionStorage.getItem('token')
        if (t !== token) {
            setToken(t)
        }

    });

    function logout() {
        sessionStorage.removeItem('token');
        setToken("");
        // navigate("/");
    }

    if (token !== "" && token !== null) {
        // var decoded = jwt_decode(token);
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className='navbar-brand'>Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/listarUsuarios" className='nav-link'>Listar Usuario</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/reserva" className='nav-link'>Reservas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/casas" className='nav-link'>Casas</Link>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-outline-danger btn-sm' onClick={() => logout()}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to="/" className='navbar-brand'>Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/login" className='nav-link'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;
