import faker from 'faker';
import { Mappable } from './customMap';

//Creates Company class that gives us information for 
//Company Marker
export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number,
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
//Passed into the marker as text for people to see
    markerContent(): string {
        return `<div>
                    <h1>Company Name: ${this.companyName}</h1>
                    <h3>Catchphrase: ${this.catchPhrase}</h3>
                </div>
                `;
    }
}