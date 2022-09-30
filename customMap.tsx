//Interface to make sure all classes work together
//Need Lat and Lng, as well as method for info
export interface Mappable {
    location: {
        lat: number,
        lng: number,
    };
    markerContent(): string,
}

export class CustomMap {
    private googleMap: google.maps.Map | null = null;

    constructor(divId: string) {
        const element: HTMLElement | null = document.getElementById(divId);
        
        if(element) {
            this.googleMap = new google.maps.Map(element, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
                }
            });
        }
    }
//Creates marker to add to map
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });
//Adds content that is added to marker 
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
        
            infoWindow.open(this.googleMap, marker);
        })
    }
}