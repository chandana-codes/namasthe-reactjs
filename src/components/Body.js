import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

export default Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([
    {
      info: {
        id: "375041",
        name: "Andhra Gunpowder",
        cloudinaryImageId: "byilgyrcfz690ryoasww",
        locality: "6th Block",
        areaName: "Koramangala",
        costForTwo: "₹350 for two",
        cuisines: ["Andhra", "Biryani", "South Indian"],
        avgRating: 4.4,
        deliveryTime: 16,
      },
    },
    {
      info: {
        id: "25620",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Intermediate Ring Road",
        areaName: "Ejipura",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.2,
        deliveryTime: 17,
      },
    },
    {
      info: {
        id: "65797",
        name: "Leon's - Burgers & Wings (Leon Grill)",
        cloudinaryImageId: "b2edbc28b7b8219d6e0a9c049ce06658",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹300 for two",
        cuisines: [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental",
        ],
        avgRating: 4.4,
        deliveryTime: 20,
      },
    },
    {
      info: {
        id: "18973",
        name: "Nandhana Palace",
        cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
        avgRating: 4.2,
        deliveryTime: 16,
      },
    },
    {
      info: {
        id: "38634",
        name: "Third Wave Coffee",
        cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹400 for two",
        cuisines: ["Beverages", "Bakery", "Continental"],
        avgRating: 4.5,
        deliveryTime: 23,
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resContainer">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
