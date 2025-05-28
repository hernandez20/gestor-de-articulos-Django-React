import  { useEffect, useState } from 'react';
import { getArticles, deleteArticle, exportArticles } from '../api/articlesAPI';
import type { Article } from '../types';
import { MdEdit ,MdDelete } from "react-icons/md";
import { FaFileExport } from "react-icons/fa";

interface Props {
  onEdit: (article: Article) => void;
  refreshTrigger: number;
}

const ArticleList = ({ onEdit, refreshTrigger }: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const loadArticles = async () => {
    const res = await getArticles();
    setArticles(res.data);
  };

  useEffect(() => {
    loadArticles();
  }, [refreshTrigger]);

  const handleDelete = async (id: number) => {
    await deleteArticle(id);
    loadArticles();
  };

  const handleExport = async () => {
    const res = await exportArticles();
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'articulos.xlsx');
    document.body.appendChild(link);
    link.click();
  };

  return (
<div className="w-full bg-white p-6 rounded-lg">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">Lista de Artículos</h2>
    <button
      onClick={handleExport}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
    >

      <div className='flex items-center  gap-x-2 h-12'>
     <small>Exportar</small> <FaFileExport />

      </div>

    </button>
  </div>

  <ul className="divide-y divide-gray-200 max-h-80 overflow-y-auto pr-2">
    {articles.map(article => (
      <li key={article.id} className="py-4 flex justify-between items-center">
        <div>
          <p className="font-medium text-gray-800">{article.codigo}</p>
          <p className="text-sm text-gray-600">{article.descripcion}</p>
          <p className="text-sm text-gray-600">${article.precio}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(article)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            <MdEdit />

          </button>
          <button
            onClick={() => handleDelete(article.id!)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
          <MdDelete />

          </button>
        </div>
      </li>
    ))}
  </ul>
</div>


  );
};

export default ArticleList;
