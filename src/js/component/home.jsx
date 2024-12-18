import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NotebookList from "./NotebookList";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">To do list</h1>
			<NotebookList></NotebookList>
		</div>
	);
};

export default Home;
