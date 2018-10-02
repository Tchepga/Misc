import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//mapbox


@Injectable()
export class MapboxApiService {

    private mapboxUrl: string = 'https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.js';
    private mapboxCss: string = 'https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css';
    
    constructor(private http: Http) {

	}

    public getMapBox(): any {
		
        const url =this.mapboxUrl;

        return this.http.get(url)
        .toPromise()
        .then(data=>{console.log(data); } )
        .catch(error => console.log('Une erreur est survenue ' + error));
    }
    public getMapBoxCss(): any {
		
        const url =this.mapboxCss;

        return this.http.get(url)
        .toPromise()
        .then(data=>{console.log(data); } )
        .catch(error => console.log('Une erreur est survenue ' + error));
    }


}