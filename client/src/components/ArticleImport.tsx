import React, { useState } from 'react';
import { importArticles } from '../api/articlesAPI';

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
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-6 rounded-lg  space-y-4"
    >
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={e => setFile(e.target.files?.[0] || null)}
        required
        className="block w-[90%] text-xs file:mr-4 file:py-2 file:px-4 
                 file:rounded file:border-0
                 file:text-sm file:font-semibold
                 file:bg-indigo-100 file:text-black
                 hover:file:bg-indigo-200 "
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
      >
        Importar Excel
      </button>
    </form>

  );
};

export default ArticleImport;
