import { CategoryId } from './category.model';
import { AnimatedRooms } from './rooms/animated.model';
import { BeachRooms } from './rooms/beach.model';
import { CafeRooms } from './rooms/cafe.model';
import { CityRooms } from './rooms/city.model';
import { HolidayRooms } from './rooms/holidays.model';
import { NatureRooms } from './rooms/nature.model';
import { NewYearsRooms } from './rooms/new_years.model';
import { PetsRooms } from './rooms/pets.model';
import { StudyWithMeRooms } from './rooms/study_with_me.model';
import { WalkWithMeRooms } from './rooms/walk_with_me';
import { WindowRooms } from './rooms/window.model';

export const Rooms = {
    [CategoryId.Window]: WindowRooms,
    [CategoryId.Animated]: AnimatedRooms,
    [CategoryId.City]: CityRooms,
    [CategoryId.Beach]: BeachRooms,
    [CategoryId.Nature]: NatureRooms,
    [CategoryId.Cafe]: CafeRooms,
    [CategoryId.Pets]: PetsRooms,
    [CategoryId.StudyWithMe]: StudyWithMeRooms,
    [CategoryId.WalkWithMe]: WalkWithMeRooms,

    [CategoryId.Holidays]: HolidayRooms,
    [CategoryId.NewYears]: NewYearsRooms,
};

const allRooms = Object.keys(Rooms).reduce((sum: any[], category: any) => {
    sum = sum.concat(...Rooms[category as CategoryId]);
    return sum;
}, []);
export const AllRooms = allRooms;

export const getRoomById = (roomId: string) => {
    const room = allRooms.find((room) => room.id === roomId);
    return room ?? null;
};
