import { CategoryId } from "./category.enum";

export interface Room {
	name: string;
	id: string;
	originalLink: string;
	category: CategoryId;
}