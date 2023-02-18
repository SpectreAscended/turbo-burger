import React from 'react';
import { useLoaderData } from 'react-router-dom';
import loaderRequest from '../../utlities/loaderRequest';

interface IMenuItem {
  id: string;
  title: string;
  price: number;
  description: string;
}

interface IMenuData {
  burgers: IMenuItem;
  hotdogs: IMenuItem;
}

const MenuPage: React.FC = () => {
  const menuData = useLoaderData() as IMenuData;

  const formatMenuData = (menuData: IMenuItem) => {
    const formattedMenuData = Object.entries(menuData).map(item => {
      return { id: item[0], ...item[1] };
    });
    return formattedMenuData;
  };

  const burgers = formatMenuData(menuData.burgers);
  const hotdogs = formatMenuData(menuData.hotdogs);

  console.log(hotdogs);
  console.log(burgers);

  return (
    <div>
      <h1>Menu Page</h1>
    </div>
  );
};

export default MenuPage;

export const loader = () => {
  const REQUEST_URL = import.meta.env.VITE_DATABASE_MENU;

  const data = loaderRequest({ url: REQUEST_URL });
  return data;
};
