import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
	{
		id: "p1",
		title: "Empire State",
		description: "One of the most famous Skyscrapers of the World",
		imageUrl:
			"https://media.cntraveler.com/photos/5924a32f88fb614c3c25fdb6/16:9/w_1280,c_limit/GettyImages-551773825.jpg",
		address: "20 W 34th St., New York, NY 10001, United States",
		location: {
			lat: 40.7484405,
			lng: -73.9878584,
		},
		creator: "u1",
	},
	{
		id: "p2",
		title: "Empire State",
		description: "One of the most famous Skyscrapers of the World",
		imageUrl:
			"https://media.cntraveler.com/photos/5924a32f88fb614c3c25fdb6/16:9/w_1280,c_limit/GettyImages-551773825.jpg",
		address: "20 W 34th St., New York, NY 10001, United States",
		location: {
			lat: 40.7484405,
			lng: -73.9878584,
		},
		creator: "u2",
	},
];
const UserPlaces = () => {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter((place) => {
		return place.creator === userId;
	});
	return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
