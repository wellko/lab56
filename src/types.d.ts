import {MouseEventHandler} from "react";

export interface PropsForBtn {
	name: string,
	price: number,
	image: string,
	count?: number,
	add?: MouseEventHandler,
	delete?: MouseEventHandler,
}

export interface ingredientObj {
	name: string,
	count: number
}

export 	interface Ingredient {
	name: string,
	price: number,
	image: string,
}