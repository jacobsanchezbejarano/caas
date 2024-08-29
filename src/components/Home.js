import React from 'react';
import { Link } from 'react-router-dom';
import CuentasRecientes from './cuentas/CuentasRecientes';
const Home = () => {
  return (
    <div>
      <CuentasRecientes />

      <section className="registrar">
        <h2>REGISTRAR</h2>
        <div className="botones-principales">
          <Link to="/ingresos">
            <button className="ingresos">
                    <img src="/images/up_arrow_green.jpg" alt="Ingresos" />
                    INGRESOS
            </button>
          </Link>
          <Link to="/egresos">
            <button className="egresos">
                <img src="/images/up_arrow_red.jpg" alt="Egresos" />
                EGRESOS
            </button>
          </Link>
        </div>
        <div className="categorias">
          <Link to="/activos">
            <a>
                <button>ACTIVOS</button>
            </a>
          </Link>
          <Link to="/pasivos">
          <a>
            <button>PASIVOS</button>
          </a>
          </Link>
          <Link to="/patrimonio">
          <a>
            <button>PATRIMONIO</button>
          </a>
          </Link>
          <Link to="/costos">
          <a>
            <button>COSTOS</button>
          </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
