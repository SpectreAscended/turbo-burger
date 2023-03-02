interface MenuItem {
  id: string;
  title: string;
  price: number;
  description?: string;
}

// The raw menu data we recieve comes in as { {id, {...otherData}} }, so this function extracts the data into a single array of objects, without the nesting.

const formatMenuData = (menuData: MenuItem) => {
  const formattedMenuData = Object.entries(menuData).map(item => {
    return { id: item[0], ...item[1] };
  });
  return formattedMenuData;
};

export default formatMenuData;
