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

// The raw menu Data we recieve comes in as { {id, {...otherData}} }, so this function extracts the data into a single array of objects, without the nesting.

const formatMenuData = (menuData: IMenuItem) => {
  const formattedMenuData = Object.entries(menuData).map(item => {
    return { id: item[0], ...item[1] };
  });
  return formattedMenuData;
};

export default formatMenuData;
