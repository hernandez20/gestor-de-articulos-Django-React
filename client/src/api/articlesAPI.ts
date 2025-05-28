import axios, { type AxiosResponse } from 'axios';
import type { Article } from '../types';

const API_URL = 'http://localhost:8000/articulos/';


const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    console.error('Axios error:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Error de red o servidor.' };
  } else {
    console.error('Error desconocido:', error);
    throw { message: 'Error inesperado.' };
  }
};

export const getArticles = async (): Promise<AxiosResponse<Article[]>> => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const createArticle = async (article: Article) => {
  try {
    return await axios.post(API_URL, article);
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const updateArticle = async (id: number, article: Article) => {
  try {
    return await axios.put(`${API_URL}${id}/`, article);
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const deleteArticle = async (id: number) => {
  try {
    return await axios.delete(`${API_URL}${id}/`);
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const importArticles = async (formData: FormData) => {
  try {
    return await axios.post(`${API_URL}importar_excel/`, formData);
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const exportArticles = async (): Promise<AxiosResponse<Blob>> => {
  try {
    return await axios.get(`${API_URL}exportar_excel/`, {
      responseType: 'blob'
    });
  } catch (error) {
    handleError(error);
    throw error;
  }
};
