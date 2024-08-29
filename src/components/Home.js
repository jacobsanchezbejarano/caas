import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="cuentas-recientes">
        <h2>CUENTAS RECIENTES</h2>
        <div className="table">
          {/* Tabla de cuentas recientes (placeholder, será generada con JS) */}
          <table>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="registrar">
        <h2>REGISTRAR</h2>
        <div className="botones-principales">
          <button className="ingresos">
            <img src="/images/up_arrow_green.jpg" alt="Ingresos" />
            INGRESOS
          </button>
          <button className="egresos">
            <img src="/images/up_arrow_red.jpg" alt="Egresos" />
            EGRESOS
          </button>
        </div>
        <div className="categorias">
          <a href="activos.html">
            <button>ACTIVOS</button>
          </a>
          <a href="pasivos.html">
            <button>PASIVOS</button>
          </a>
          <a href="patrimonio.html">
            <button>PATRIMONIO</button>
          </a>
          <a href="costos.html">
            <button>COSTOS</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
