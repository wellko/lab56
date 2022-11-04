import React from "react";
import './Burger.css'
import {ingredientObj} from "../../types";

interface BurgerProps{
	ingredients : ingredientObj[]
}


const Burger:React.FC<BurgerProps> = (props) => {
	const getDivs = (nameOfIngredient:string) =>{
		const divs = [];
		const count = props.ingredients.filter(ingredient => ingredient.name === nameOfIngredient)[0].count
		if (count > 0){
			for (let i = 0; i < count; i++){
				divs.push(1);
			}
		}
		 return divs.map(()=> (<div className={nameOfIngredient}></div> ));
	}

	const saladDiv = getDivs('Salad');
	const cheeseDiv = getDivs('Cheese');
	const meatDiv = getDivs('Meat');
	const baconDiv = getDivs('Bacon');


	return(
	<div className="Burger">
		<div className="BreadTop">
			<div className="Seeds1"></div>
			<div className="Seeds2"></div>
		</div>
		{baconDiv}
		{saladDiv}
		{cheeseDiv}
		{meatDiv}
		<div className="BreadBottom"></div>
	</div>
)
}

export default Burger;