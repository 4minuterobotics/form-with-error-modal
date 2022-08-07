import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App(props) {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	// array item deleting
	function deleteUserHandler(identifier) {
		setUsersList((prevUsersList) => {
			return prevUsersList.filter((user, index) => {
				console.log(`Deleting ${user.name} from on App.js`);

				return index !== identifier;
			});
		});
		console.log(usersList);
	}

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} onDeleteUser={deleteUserHandler} />
		</div>
	);
}

export default App;
