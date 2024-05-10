import React from 'react';
import UsuarioForm from './components/UsuarioForm';
import PerfilForm from './components/PerfilForm';

function App() {
  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <UsuarioForm />
      <PerfilForm />
    </div>
  );
}

export default App;