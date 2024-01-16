import Link from "next/link";
import Image from "next/image";

const URI = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(URI + id);
  if (!response.ok) throw new Error("Failed to fetch drink...");
  return response.json();
};

const Drink = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  return (
    <div>
      <Link href={`/drinks`} className="btn btn-primary mt-8 mb-12">
        Back
      </Link>
      <Image
        src={data?.drinks[0].strDrinkThumb}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg mb-5"
        priority
        alt={`${data?.drinks[0].strDrink} image`}
      />
      <h1 className="text-4xl mb-8">
        {data?.drinks[0].idDrink} - {data?.drinks[0].strDrink}
      </h1>
    </div>
  );
};

export default Drink;
