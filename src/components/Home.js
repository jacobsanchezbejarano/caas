import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import CuentasRecientes from './cuentas/CuentasRecientes';
const Home = () => {
  const { state } = useContext(GlobalContext);
  const savedToken = localStorage.getItem('authTokenCaas');

  return (
    state.user && <div>
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
                <button>ACTIVOS</button>
          </Link>
          <Link to="/pasivos">
            <button>PASIVOS</button>
          </Link>
          <Link to="/patrimonio">
            <button>PATRIMONIO</button>
          </Link>
          <Link to="/costos">
            <button>COSTOS</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
