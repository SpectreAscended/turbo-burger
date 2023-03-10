interface MenuItem {
  id: string;
  title: string;
  price: number;
  description?: string;
}

interface ReviewItem {
  id: string;
  title: string;
  rating: string;
  date: Date;
  description: string;
  userName: string;
}

// The raw menu data we recieve comes in as { {id, {...otherData}} }, so this function extracts the data into a single array of objects, without the nesting.

const formatAPIData = (menuData: MenuItem | ReviewItem) => {
  const formattedMenuData = Object.entries(menuData).map(item => {
    return { id: item[0], ...item[1] };
  });
  return formattedMenuData;
};

export default formatAPIData;
