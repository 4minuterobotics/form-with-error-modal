import React from "react";

function ListItem(props) {
	function handleDelete() {
		console.log("clicked delete on ListItem.js");
		props.onDeleteUser(props.identifier);
	}

	return (
		<React.Fragment>
			<li>
				{props.name} ({props.age} years old){" "}
				<button onClick={handleDelete}>Delete</button>
			</li>
		</React.Fragment>
	);
}
export default ListItem;
