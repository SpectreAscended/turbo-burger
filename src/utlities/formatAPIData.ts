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
  description: string;
  userName: string;
  date: Date;
}

// The raw API data we recieve comes in as { {id, {...otherData}} }, so this function extracts the data into a single array of objects, without the nesting.

const formatAPIData = (apiData: MenuItem | ReviewItem) => {
  const formattedAPIData = Object.entries(apiData).map(item => {
    return { id: item[0], ...item[1] };
  });
  return formattedAPIData;
};

export default formatAPIData;
