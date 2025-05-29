import React, { useState } from 'react';
import { importArticles } from '../api/articlesAPI';
import { FaFileUpload, FaFileImport } from 'react-icons/fa';

interface Props {
  onFinish: () => void;
}

const ArticleImport = ({ onFinish }: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    await importArticles(formData);
    onFinish();
  };

  return (

<div>
<p className='text-xl font-semibold'>Sube un Archivo</p>

<form
  onSubmit={handleSubmit}
  className="w-full bg-white p-6 rounded-lg space-y-4"
>
  <label
    htmlFor="file-upload"
    className="inline-flex justify-center items-center gap-2 cursor-pointer w-full bg-gray-400 text-black text-sm px-4 py-2 rounded hover:bg-gray-300 font-semibold"
  >
    <FaFileUpload className="text-white" />
  </label>

  <input
    id="file-upload"
    type="file"
    accept=".xlsx,.xls"
    onChange={e => setFile(e.target.files?.[0] || null)}
    required
    className="hidden"
  />

  <button
    type="submit"
    disabled={!file}
    className={`w-full h-12 py-2 px-4 rounded transition duration-300 flex items-center justify-center gap-2
      ${file ? 'bg-blue-600 text-white hover:bg-indigo-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
  >
    <small>Importar Excel</small> 
    <FaFileImport />
  </button>
</form>
</div>
  );
};

export default ArticleImport;
