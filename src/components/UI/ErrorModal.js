import React from "react";
import ReactDOM from "react-dom"; //needed for portal

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
	// this div is the black background when the error modal pops up
	return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
	<Card className={classes.modal}>
		<header className={classes.header}>
			<h2>{props.title}</h2>
		</header>
		<div className={classes.content}>
			<p>{props.message}</p>
		</div>
		<footer className={classes.actions}>
			<Button onClick={props.onConfirm}>Okay</Button>
		</footer>
	</Card>;
};

const ErrorModal = (props) => {
	return (
		<div>
			{/* this function porting objects. It takes 2 inputs, 
    1.  the node component being ported 
    2.  a pointer to the real DOM where this component should be rendered */}
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById("overlay-root")
			)}
		</div>
	);
};

export default ErrorModal;
