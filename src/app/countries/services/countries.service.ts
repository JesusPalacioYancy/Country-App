import { catchError, map, Observable, of, tap  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country.interface';
import { Reguion } from '../interfaces/reguion.type';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url : string = "https://restcountries.com/v3.1";

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountry: {term: '', countries: []},
    byReguion: {region: '', countries: []}
  };

  constructor(private http: HttpClient) { 
    this.loadFromLocalStorage()
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  };

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

  getHttpRequest(url: string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
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
      .pipe(
        tap(countries => this.cacheStore.byCapital = {term, countries}),
        tap( () => this.saveToLocalStorage())
      )
  };

  searchCountry(term: string): Observable<Country[]>{
    const url = `${this.url}/name/${term}`
    return this.getHttpRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountry = {term, countries}),
        tap( () => this.saveToLocalStorage())
      )
  };

  searchReguin(region: Reguion): Observable<Country[]> {
    const url = `${this.url}/region/${region}`
    return this.getHttpRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byReguion = {region, countries}),
        tap( () => this.saveToLocalStorage())
      )
  };
  

}
