import axios from 'axios';
import type { Article } from '../types';

const API_URL = 'http://localhost:8000/articulos/';

export const getArticles = () => axios.get(API_URL);
export const createArticle = (article: Article) => axios.post(API_URL, article);
export const updateArticle = (id: number, article: Article) => axios.put(`${API_URL}${id}/`, article);
export const deleteArticle = (id: number) => axios.delete(`${API_URL}${id}/`);
export const importArticles = (formData: FormData) => axios.post(`${API_URL}importar_excel/`, formData);
export const exportArticles = () => axios.get(`${API_URL}exportar_excel/`, { responseType: 'blob' });
