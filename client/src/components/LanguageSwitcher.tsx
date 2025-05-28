import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <select
  onChange={handleChange}
  value={i18n.language}
  className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px]  px-4 py-2 transition duration-200 shadow-sm hover:border-gray-400"
>
  <option value="es">Español</option>
  <option value="en">English</option>
</select>

  );
}
