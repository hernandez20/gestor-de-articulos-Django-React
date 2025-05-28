import React, { useState, useEffect } from 'react';
import { createArticle, updateArticle } from '../api/articlesAPI';
import type { Article } from '../types';

interface Props {
  articleToEdit?: Article;
  onFinish: () => void;
}

const ArticleForm = ({ articleToEdit, onFinish }: Props) => {
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    if (articleToEdit) {
      setCodigo(articleToEdit.codigo);
      setDescripcion(articleToEdit.descripcion);
      setPrecio(articleToEdit.precio);
    }
  }, [articleToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newArticle = { codigo, descripcion, precio };
    if (articleToEdit && articleToEdit.id) {
      await updateArticle(articleToEdit.id, newArticle);
    } else {
      await createArticle(newArticle);
    }
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full  bg-white p-6 rounded-lg  space-y-4">
      <input
        type="text"
        value={codigo}
        onChange={e => setCodigo(e.target.value)}
        placeholder="Código"
        required
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        placeholder="Descripción"
        required
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={precio}
        onChange={e => setPrecio(Number(e.target.value))}
        placeholder="Precio"
        required
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        {articleToEdit ? 'Actualizar' : 'Crear'}
      </button>
    </form>

  );
};

export default ArticleForm;