import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";

export function Card(props) {
	return (
		<div>
			<div className="card">
				<img src="rigo-baby.jpg" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.myProperty}</h5>
					<p className="card-text">Nothing just texts</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	myProperty: PropTypes.string
};
