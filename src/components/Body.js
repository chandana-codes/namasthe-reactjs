import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [showTopRated, setShowTopRated] = useState(false); // avg. rating >= 4.3

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ?? [];
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const filterBySearchQuery = (restaurants) => {
    return restaurants.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        restaurant.info.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
  };

  const filterByTopRated = (restaurants) => {
    return restaurants.filter((res) => res.info.avgRating >= 4);
  };

  //Conditional Rendering
  // console.log("listOfRestaurants", listOfRestaurants);
  // console.log("filteredRestaurants", filteredRestaurant);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks, like you are offline!! Please check your internet connection;
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchFilteredRestaurant =
                filterBySearchQuery(listOfRestaurants);
              setFilteredRestaurant(searchFilteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterByTopRated(listOfRestaurants);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resContainer">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
