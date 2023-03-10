import React from 'react';
import Menu from '../../components/menu/Menu';
import { useLoaderData } from 'react-router-dom';
import loaderRequest from '../../utlities/loaderRequest';
import formatAPIData from '../../utlities/formatAPIData';

interface MenuItem {
  id: string;
  title: string;
  price: number;
  description?: string;
}

interface MenuData {
  burgers: MenuItem;
  hotdogs: MenuItem;
  chicken: MenuItem;
  drinks: MenuItem;
  sides: MenuItem;
}

const MenuPage: React.FC = () => {
  const menuData = useLoaderData() as MenuData;

  const burgers = formatAPIData(menuData.burgers) as MenuItem[];
  const hotdogs = formatAPIData(menuData.hotdogs) as MenuItem[];
  const chicken = formatAPIData(menuData.chicken) as MenuItem[];
  const drinks = formatAPIData(menuData.drinks) as MenuItem[];
  const sides = formatAPIData(menuData.sides) as MenuItem[];

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
