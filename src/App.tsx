import React, {MouseEventHandler, useState} from 'react';
import Bacon from './assets/Bacon.png';
import Meat from './assets/Meat.png';
import Cheese from './assets/Cheese.png';
import Salad from './assets/Salad.png';


import './App.css';
import Burger from "./components/Burger/Burger";
import ToppingsBtn from "./components/ToppingsBtn/ToppingsBtn";

function App() {
	interface Ingredient {
		name: string,
		price: number,
		image: string,
	}

	interface PropsForBtn {
		name: string,
		price: number,
		image: string,
		count?: number,
		add?: MouseEventHandler,
		delete?: MouseEventHandler,
	}

	interface ingredientObj {
		name: string,
		count: number
	}

	const INGREDIENTS: Ingredient[] = [
		{name: 'Meat', price: 80, image: Meat},
		{name: 'Cheese', price: 50, image: Cheese},
		{name: 'Salad', price: 10, image: Salad},
		{name: 'Bacon', price: 60, image: Bacon},
	];

	const [ingredient, setIngredient] = useState([
		{name: 'Meat', count: 0},
		{name: 'Cheese', count: 0},
		{name: 'Salad', count: 0},
		{name: 'Bacon', count: 0},
	])

	const createBtns = () => {
		const ingCopy: PropsForBtn[] = [...INGREDIENTS]
		ingCopy.map((item, index) => {
			ingCopy[index].count = ingredient[index].count
			ingCopy[index].add = () => ingredientAdd(item.name)!;
			ingCopy[index].delete = () => deleteEl(item.name)!;
		})
		return ingCopy
	}

	const deleteEl = (ingredientName: string) => {
		setIngredient(prev => prev.map(item => {
				if (item.name === ingredientName) {
					return {
						...item,
						count: 0
					}
				}
				return item
			}
		))
	}

	const ingredientAdd = (ingredientName: string) => {
		setIngredient(prev => prev.map(item => {
				if (item.name === ingredientName) {
					return {
						...item,
						count: item.count++
					}
				}
				return item
			}
		))
	}


	const price = (ingredientArr: ingredientObj[]) => {
		return ingredientArr.filter(ingredients => ingredients.count > 0).reduce<number>((acc, everyIngredient) => {
			if (everyIngredient.name === 'Meat') {
				return acc + (everyIngredient.count * 80)
			} else if (everyIngredient.name === 'Cheese') {
				return acc + (everyIngredient.count * 50)
			} else if (everyIngredient.name === 'Salad') {
				return acc + (everyIngredient.count * 10)
			} else if (everyIngredient.name === 'Bacon') {
				return acc + (everyIngredient.count * 60)
			} else {
				return acc
			}
		}, 30)
	}


	return (
		<div className="App">
			<div className='column'>
				<ToppingsBtn btn={createBtns()}/>
			</div>
			<div className='column'>
				<Burger ingredients={ingredient}/>
				<span> Price is : {price(ingredient)} som </span>
			</div>
		</div>
	);
}

export default App;
