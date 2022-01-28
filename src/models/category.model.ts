export enum CategoryId {
	Cafe = 'cafe',
	Walk = 'walk',
	Beach = 'beach',
	City = 'city',
	Window = 'window',
	Nature = 'nature',
	Christmas = 'christmas',
	Animated = 'animated',
	NewYears = 'newyears'
}

export const Categories = [
	{
		icon: '🎆',
		name: 'New Years',
		id: CategoryId.NewYears
	},
	{
		icon: '🎅',
		name: 'Christmas',
		id: CategoryId.Christmas
	},
	{
		icon: '☕',
		name: 'Cafe',
		id: CategoryId.Cafe
	},
	{
		icon: '🌲',
		name: 'Nature',
		id: CategoryId.Nature
	},
	{
		icon: '🏖️',
		name: 'Beach',
		id: CategoryId.Beach
	},
	{
		icon: '🏙️',
		name: 'City',
		id: CategoryId.City
	},
	{
		icon: '📺',
		name: 'Animated',
		id: CategoryId.Animated
	}
]