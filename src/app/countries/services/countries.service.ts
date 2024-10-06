import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url:string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  searchCapital<Country>(term: string){
    this.http.get<Country>(`${this.url}/capital/${term}`)
  }


}
