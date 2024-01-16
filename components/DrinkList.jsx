import Link from "next/link";
import Image from "next/image";

// const DrinkList = ({ drinks }) => {
//   return (
//     <ul className="menu menu-vertical pl-0">
//       {drinks &&
//         drinks?.map((drink) => (
//           <li key={drink.idDrink}>
//             <Link
//               href={`/drinks/${drink.idDrink}`}
//               className="text-xl font-medium"
//               drink={drink}
//             >
//               {drink.strDrink}
//             </Link>
//           </li>
//         ))}
//     </ul>
//   );
// };

const DrinkList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks &&
        drinks?.map((drink) => (
          <li key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
              drink={drink}
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                  alt={`${drink.strDrink} image`}
                  className="rounded-md object-cover"
                />
              </div>
              {drink.strDrink}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default DrinkList;
