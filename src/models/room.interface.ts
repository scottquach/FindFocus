import { CategoryId } from "./category.model";

export interface Room {
	name: string;
	id: string;
	link: string;
	creator: string;
	category: CategoryId;
}