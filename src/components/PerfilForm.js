import React, { useState } from 'react';
import api from '../services/api';

function PerfilForm() {
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!descricao) {
      alert('Preencha a descrição do perfil!');
      return;
    }

    try {
      await api.post('/perfis', { descricao });
      alert('Perfil cadastrado com sucesso!');
      setDescricao('');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar perfil.');
    }
  };

  return (
    <>
      Cadastro de Perfil
      
    
  );
}

export default PerfilForm;