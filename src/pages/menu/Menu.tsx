import React from 'react';
import Menu from '../../components/menu/Menu';
import { useLoaderData } from 'react-router-dom';
import loaderRequest from '../../utlities/loaderRequest';
import formatMenuData from '../../utlities/formatMenuData';

interface IMenuItem {
  id: string;
  title: string;
  price: number;
  description?: string;
}

interface IMenuData {
  burgers: IMenuItem;
  hotdogs: IMenuItem;
  chicken: IMenuItem;
  drinks: IMenuItem;
  sides: IMenuItem;
}

const MenuPage: React.FC = () => {
  const menuData = useLoaderData() as IMenuData;

  const burgers = formatMenuData(menuData.burgers);
  const hotdogs = formatMenuData(menuData.hotdogs);
  const chicken = formatMenuData(menuData.chicken);
  const drinks = formatMenuData(menuData.drinks);
  const sides = formatMenuData(menuData.sides);

  return (
    <>
      <Menu
        burgers={burgers}
        hotdogs={hotdogs}
        chicken={chicken}
        drinks={drinks}
        sides={sides}
      />
    </>
  );
};

export default MenuPage;

export const loader = () => {
  const REQUEST_URL = import.meta.env.VITE_DATABASE_MENU;

  const data = loaderRequest({ url: REQUEST_URL });
  return data;
};
