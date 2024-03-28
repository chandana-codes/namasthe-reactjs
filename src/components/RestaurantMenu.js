import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    // console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => (
          <div key={item.card.info.id}>
            <li>{item.card.info.name}</li>
            <p>
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
          </div>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
