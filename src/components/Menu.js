import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const navigate = useNavigate();

    const handleResize = () => {
        if (window.innerWidth > 1000) {
        setIsMenuVisible(true);
        } else {
        setIsMenuVisible(false);
        }
    };

    useEffect(() => {
        handleResize(); // Verifica el tamaño de la pantalla al montar el componente
        window.addEventListener('resize', handleResize); // Agrega el listener para el cambio de tamaño

        return () => {
        window.removeEventListener('resize', handleResize); // Limpia el listener al desmontar el componente
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    
    const handleLinkClick = (path) => {
        setIsMenuVisible(false); // Cierra el menú al seleccionar un ítem
        navigate(path); // Navega a la ruta seleccionada
    };

    return (
    <div>
        <button className="hamburger-icon" onClick={toggleMenu}>
        <span className="icon">{isMenuVisible ? 'X' : '☰'}</span>
        </button>
        <nav id="menu-nav" className={`menu-nav ${isMenuVisible ? 'visible' : 'hidden'}`}>
        <ul>
            <li><Link to="/" onClick={() => handleLinkClick('/')}>Home</Link></li>
            <li><Link to="/transacciones" onClick={() => handleLinkClick('/transacciones')}>Transacciones</Link></li>
            <li><Link to="/estados-financieros" onClick={() => handleLinkClick('/estados-financieros')}>Ver Estados Financieros</Link></li>
            <li><Link to="/comparar-estados" onClick={() => handleLinkClick('/comparar-estados')}>Comparar Estados Financieros</Link></li>
            <li><Link to="/graficos" onClick={() => handleLinkClick('/graficos')}>Gráficos</Link></li>
            <li><Link to="/filtrar" onClick={() => handleLinkClick('/filtrar')}>Filtrar</Link></li>
            <li><Link to="/estados-de-resultados" onClick={() => handleLinkClick('/estados-de-resultados')}>Estados de Resultados</Link></li>
            <li><Link to="/balances-y-estado" onClick={() => handleLinkClick('/balances-y-estado')}>Balances y Estado</Link></li>
            <li><Link to="/plan-de-cuentas" onClick={() => handleLinkClick('/plan-de-cuentas')}>Plan de Cuentas</Link></li>
            <li><Link to="/asiento-personalizado" onClick={() => handleLinkClick('/asiento-personalizado')}>Asiento Personalizado</Link></li>
            <li><Link to="/analisis" onClick={() => handleLinkClick('/analisis')}>Análisis</Link></li>
            <li><Link to="/presupuesto" onClick={() => handleLinkClick('/presupuesto')}>Presupuesto</Link></li>
            <li><button type="button" onClick={() => handleLinkClick('/curso-gratuito')}>CURSO GRATUITO</button></li>
            <li><Link to="/ajustes" onClick={() => handleLinkClick('/ajustes')}>Ajustes</Link></li>
            <li><Link to="/cerrar-sesion" onClick={() => handleLinkClick('/cerrar-sesion')}>Cerrar Sesión</Link></li>
        </ul>
        </nav>
    </div>
    );
};

export default Menu;
