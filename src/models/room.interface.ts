import { CategoryId } from "./category.enum";

export interface Room {
	name: string;
	id: string;
	link: string;
	creator: string;
	category: CategoryId;
}