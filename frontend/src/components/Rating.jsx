import React from "react";

const Rating = ({ value, text }) => {
	return (
		<div className="rating">
			{[1, 2, 3, 4, 5].map((index) => (
				<i
					key={index}
					className={
						value >= index
							? "fas fa-star"
							: (value = index - 0.5 ? "fas fa-star-half-alt" : "far fa-star")
					}
				></i>
			))}

			<div>{text && text}</div>
		</div>
	);
};

export default Rating;
