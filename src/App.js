import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Volver from './components/Volver';
import Home from './components/Home';
import Transacciones from './components/Transacciones';
import EstadosFinancieros from './components/EstadosFinancieros';
import CompararEstados from './components/CompararEstados';
import Graficos from './components/Graficos';
import Filtrar from './components/Filtrar';
import EstadosDeResultados from './components/EstadosDeResultados';
import BalancesYEstado from './components/BalancesYEstado';
import PlanDeCuentas from './components/PlanDeCuentas';
import AsientoPersonalizado from './components/AsientoPersonalizado';
import Analisis from './components/Analisis';
import Presupuesto from './components/Presupuesto';
import CrearUsuarioForm from './components/CrearUsuarioForm';
import Login from './components/Login';
import Ajustes from './components/Ajustes';
import CerrarSesion from './components/CerrarSesion';

const App = () => {
  return (
      <Router>
        <GlobalProvider>
            <Header/>
          <main>
              <Menu />
              <Volver />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/transacciones" element={<Transacciones />} />
                  <Route path="/crearusuario" element={<CrearUsuarioForm />} />
                  <Route path="/login" element={<Login />} />
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
                  <Route path="/ajustes" element={<Ajustes />} />
                  <Route path="/cerrar-sesion" element={<CerrarSesion />} />
              </Routes>
          </main>
        </GlobalProvider>
      </Router>
  );
};

export default App;
