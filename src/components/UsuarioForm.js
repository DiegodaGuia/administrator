import React, { useState } from 'react';
import api from '../services/api';

function UsuarioForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/usuarios', { nome, email, senha });
      alert('Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

export default UsuarioForm;