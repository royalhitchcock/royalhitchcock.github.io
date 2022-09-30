import faker from 'faker';
import { Mappable } from './customMap';

//User Company class that gives us information for 
//User Marker
export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
//Passed into the marker as text for people to see
    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}
