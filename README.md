<p align="center">
<img src="src/assets/logo.png" alt="FindFocus" height="69" />
</p>

<h1 align="center">
✨ Study rooms for the modern age ✨ <br/>
</h1>
<p align="center">Create digital study rooms customizable with a variety of live backgrounds, resizable widgets, and a fully featured theming system.
</p>

<img width="100%" src="demo.gif" />

# FindFocus

FindFocus is a open-source platform for building customizable digital study rooms.

- <a href="https://findfocus.studio/" target="_blank">Website</a>

## Features

-   <b>Live room backgrounds</b><br />
    Select live backgrounds from a list of curated categories to create different study environments 📺.

-   <b>Widgets</b><br />
    Add, resize, and arrange from a selection of widgets to create a study room that tailors to your needs.

-   <b>Dynamic themes</b><br />
    Choose from a variety of preset themes or pick your own colors to create your own🎨. This includes both dark and light mode themes across the site!

## Getting started

Feel free to create an enhancement request or to check out the <a href="https://github.com/scottquach/FindFocus/projects/1">request tracker</a> for potential contributions.

### Installing

To get the project running locally run the following commands.

```
npm ci
npm run start
```

This will spin up the project on `http://localhost:3000/`

### Creating widgets

#### Registering

First register your widget with a WidgetType id contained within the widget-types.enum.ts file.
The object will look similar to what's below.

```
export enum WidgetType {
	Spotify = 'spotify',
	SoundCloud = 'soundcloud',
	StickyNote = 'stickynote',
	YouTube = 'youtube',
	Weather = 'weather',
	Ambient = 'ambient',
	Quote = 'quote',
	Clock = 'clock',
	Timer = 'timer',
	TodosList = 'todoslist',
}
```

#### Creating widget component

Widget components can be created under the components/Widgets folder. A `<WidgetFrame></WidgetFrame>` host component serves as a foundation to maintain consistency across all created components.

View `components/Widgets/StickyNoteWidget` as a decent simple example.

#### Connecting your widget to the platform

1. You can define default widget attributes such as a friendly title, initial data configs, and min size within the `widget.model.ts` file. This tells the platform how to create and your widget.
2. Within `Grid.tsx` add your custom widget to the switch statement starting on line 81. This tells the grid what component to display based on a WidgetType
3. Add your widget to the widget picker menu in `components/WidgetPicker`. Simply follow the given format to add your custom button, name, and onClick handler. This will add the ability for the end user to add the widget to the grid via the widget picker menu. 

## License

Available under MIT license
