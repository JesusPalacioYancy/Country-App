import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { catchError, delay, map, Observable, of  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url:string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  getHttpRequest(url: string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        delay(2000)
      );
  };

  searchCountryByAlphaCode(id: string):Observable<Country | null>{
    const url = `${this.url}/alpha/${id}`
    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError( () => of(null) )
      );
  };

  searchCapital(term: string):Observable<Country[]>{
    const url = `${this.url}/capital/${term}`
    return this.getHttpRequest(url)
  };

  searchCountry(term: string): Observable<Country[]>{
    const url = `${this.url}/name/${term}`
    return this.getHttpRequest(url)
  };

  searchReguin(region: string): Observable<Country[]> {
    const url = `${this.url}/region/${region}`
    return this.getHttpRequest(url)
  };
  

}
