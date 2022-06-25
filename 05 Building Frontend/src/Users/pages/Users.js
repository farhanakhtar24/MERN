import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "Max Schwarz",
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
			places: 3,
		},
	];

	return <UsersList items={USERS} />;
};

export default Users;
