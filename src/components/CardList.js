import React from "react";
import Card from './Card.js';
// import { robots }  from './robots.js';

const CardList = ({ robots }) => {
	// if(true)//Force trouwing an error
	// {
	// 	throw new Error('NOOOOOOO!!')
	// }

	return (
			<React.Fragment>
			{
				robots.map((user,i) => {
				return (
					<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
					/>);
				})
			}
			</React.Fragment>
			);
}

export default CardList;