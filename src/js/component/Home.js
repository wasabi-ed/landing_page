import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Card } from "./Card.js";
import { Jumbotron } from "./Jumbotron.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Header />
			<Jumbotron />
			<div className="row">
				<div className="col-4">
					<Card myProperty="Edward" />
				</div>
				<div className="col-4">
					<Card myProperty="Emma" />
				</div>
				<div className="col-4">
					<Card myProperty="Jonathan" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
