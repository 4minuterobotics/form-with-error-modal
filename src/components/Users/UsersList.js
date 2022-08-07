import React from "react";

import ListItem from "./ListItem";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user, index) => {
					return (
						<ListItem
							key={index}
							identifier={index}
							name={user.name}
							age={user.age}
							onDeleteUser={props.onDeleteUser}
						/>
					);
				})}
			</ul>
		</Card>
	);
};

export default UsersList;
