import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Volver from './Volver';
import Transacciones from './Transacciones';
import EstadosFinancieros from './EstadosFinancieros';
import CompararEstados from './CompararEstados';
import Graficos from './Graficos';
import Filtrar from './Filtrar';
import EstadosDeResultados from './EstadosDeResultados';
import BalancesYEstado from './BalancesYEstado';
import PlanDeCuentas from './PlanDeCuentas';
import AsientoPersonalizado from './AsientoPersonalizado';
import Analisis from './Analisis';
import Presupuesto from './Presupuesto';
import CerrarSesion from './CerrarSesion';

const App = () => {
  return (
      <Router>
          <div>
              <Menu />
              <Routes>
                  <Route path="/" element={<Volver />} />
                  <Route path="/transacciones" element={<Transacciones />} />
                  <Route path="/estados-financieros" element={<EstadosFinancieros />} />
                  <Route path="/comparar-estados" element={<CompararEstados />} />
                  <Route path="/graficos" element={<Graficos />} />
                  <Route path="/filtrar" element={<Filtrar />} />
                  <Route path="/estados-de-resultados" element={<EstadosDeResultados />} />
                  <Route path="/balances-y-estado" element={<BalancesYEstado />} />
                  <Route path="/plan-de-cuentas" element={<PlanDeCuentas />} />
                  <Route path="/asiento-personalizado" element={<AsientoPersonalizado />} />
                  <Route path="/analisis" element={<Analisis />} />
                  <Route path="/presupuesto" element={<Presupuesto />} />
                  <Route path="/cerrar-sesion" element={<CerrarSesion />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
