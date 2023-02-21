import MenuItem from '../../components/menuItem/MenuItem';
import loaderRequest from '../../utlities/loaderRequest';
import { useRouteLoaderData } from 'react-router';

interface LoaderData {
  id: string;
  price: number;
  description?: string;
  title: string;
}

interface LoaderProps {
  params: {
    menuItemId?: string;
  };
}

const MenuItemPage: React.FC = () => {
  const menuItem = useRouteLoaderData('menu-item') as LoaderData;
  return <MenuItem item={menuItem} />;
};

export default MenuItemPage;

export const loader = async ({ params }: LoaderProps) => {
  const id = params.menuItemId;

  let itemType: string;

  if (id?.includes('bg')) {
    itemType = 'burgers';
  } else if (id?.includes('hd')) {
    itemType = 'hotdogs';
  } else if (id?.includes('ch')) {
    itemType = 'chicken';
  } else if (id?.includes('dr')) {
    itemType = 'drinks';
  } else if (id?.includes('sd')) {
    itemType = 'sides';
  } else return;

  const REQUEST_URL: string = import.meta.env.VITE_DATABASE_MENU_ITEM;

  const url = `${REQUEST_URL}${itemType}/${id}.json`;
  const data = await loaderRequest({ url: url });

  const loaderData: LoaderData = {
    id: id,
    title: data.title,
    price: data.price,
    description: data.description,
  };

  return loaderData;
};
