import DrinkList from "@/components/DrinkList";
const URI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  const response = await fetch(URI);
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
};

const Drinks = async () => {
  const data = await fetchDrinks();
  return (
    <>
      <DrinkList drinks={data.drinks} />
    </>
  );
};

export default Drinks;
