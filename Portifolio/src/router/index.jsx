import { Routes, Route } from 'react-router-dom';

// Importa as paginas do projeto
import PaginaPrincipal from '../pages/PaginaPrincipal';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';

// Funcao que retorna as rotas do projeto
export default function Router() {
  return (
    <div>
      <Routes>
        {/* Rota para a pagina principal */}
        <Route path="/" element={<PaginaPrincipal />} />
        {/* Rota para a pagina de administração */}
        <Route path="/Admin" element={<Admin />} />
        {/* Rota para pagina nao encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

