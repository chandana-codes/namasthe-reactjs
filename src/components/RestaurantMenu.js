import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card;

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
