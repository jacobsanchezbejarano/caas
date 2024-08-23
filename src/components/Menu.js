import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav id="menu-nav">
            <ul>
                <li><Link to="/">Volver</Link></li>
                <li><Link to="/transacciones">Transacciones</Link></li>
                <li><Link to="/estados-financieros">Ver Estados Financieros</Link></li>
                <li><Link to="/comparar-estados">Comparar Estados Financieros</Link></li>
                <li><Link to="/graficos">Gráficos</Link></li>
                <li><Link to="/filtrar">Filtrar</Link></li>
                <li><Link to="/estados-de-resultados">Estados de Resultados</Link></li>
                <li><Link to="/balances-y-estado">Balances y Estado</Link></li>
                <li><Link to="/plan-de-cuentas">Plan de Cuentas</Link></li>
                <li><Link to="/asiento-personalizado">Asiento Personalizado</Link></li>
                <li><Link to="/analisis">Análisis</Link></li>
                <li><Link to="/presupuesto">Presupuesto</Link></li>
                <li><button type="button">CURSO GRATUITO</button></li>
                <li><Link to="/cerrar-sesion">Cerrar Sesión</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
