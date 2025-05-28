import  { useState } from 'react';
import ArticleForm from '../components/ArticleForm';
import ArticleList from '../components/ArticleList';
import ArticleImport from '../components/ArticleImport';
import type { Article } from '../types';
import AppLayout from '../components/AppLayout';

const Home = () => {
  const [articleToEdit, setArticleToEdit] = useState<Article | undefined>(undefined);
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = () => setRefreshKey(prev => prev + 1);

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 py-8 lg:flex lg:gap-6">
        <div className="lg:w-5/12 w-full flex flex-col justify-between gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
            <ArticleForm
              articleToEdit={articleToEdit}
              onFinish={() => {
                setArticleToEdit(undefined);
                triggerRefresh();
              }}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ArticleImport onFinish={triggerRefresh} />
          </div>
        </div>

        <div className="lg:w-7/12 w-full mt-6 lg:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-md h-full min-h-full">
            <ArticleList onEdit={setArticleToEdit} refreshTrigger={refreshKey} />
          </div>
        </div>
      </div>


    </AppLayout>
  );
};

export default Home;