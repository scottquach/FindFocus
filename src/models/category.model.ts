export enum CategoryId {
	// Year round
	Window = 'window',
	Animated = 'animated',
	City = 'city',
	Beach = 'beach',
	Nature = 'nature',
	Cafe = 'cafe',
	Pets = 'pets',
	StudyWithMe = 'study_with_me',
	WalkWithMe = 'walk_with_me',

    // Timed
	Holidays = 'holidays',
	NewYears = 'new_years',
}

export interface Category {
	icon: string,
	name: string,
	id: CategoryId
}

export const Categories: Category[] = [
	{
		icon: '📺',
		name: 'Animated Lo-fi',
		id: CategoryId.Animated
	},
	{
		icon: '🪟',
		name: 'Window',
		id: CategoryId.Window,
	},
	{
		icon: '🏙️',
		name: 'City',
		id: CategoryId.City
	},
	{
		icon: '🏖️',
		name: 'Beach',
		id: CategoryId.Beach
	},
	{
		icon: '🌲',
		name: 'Nature',
		id: CategoryId.Nature
	},
	{
		icon: '☕',
		name: 'Cafe',
		id: CategoryId.Cafe
	},
	{
		icon: '🐶',
		name: 'Pets',
		id: CategoryId.Pets
	},
	{
		icon: '🚶🏻‍♀️',
		name: 'Walk with me',
		id: CategoryId.WalkWithMe
	},
	{
		icon: '📚',
		name: 'Study with me',
		id: CategoryId.StudyWithMe
	},
	// {
	// 	icon: '🎅',
	// 	name: 'Holidays',
	// 	id: CategoryId.Holidays
	// },
	// {
	// 	icon: '🎆',
	// 	name: 'New Years',
	// 	id: CategoryId.NewYears
	// },
]

export const getCategoryById = (id: CategoryId): Category | null => {
	return Categories.find(cat => cat.id === id) ?? null;
}